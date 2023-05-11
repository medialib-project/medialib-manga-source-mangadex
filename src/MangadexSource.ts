import axios, { AxiosInstance } from 'axios';
import {
  flattenRawVolumes,
  getAuthorIdFromRawManga,
  getRawFormatsWithPreferences,
  getRawGenresWithPreferences,
  getRawTagsWithPreferences,
  getRawThemesWithPreferences,
  sortChaptersByNumberAsc,
} from './utils/mangadexUtils.js';
import {
  AbstractMangaSource,
  Chapter,
  Manga,
  Page,
  arrayUtils,
  objectUtils,
  promiseUtils,
  mangaSourceFetchOption,
  mangaSourceFetchResult,
  chapterSourceFetchOption,
  chapterSourceFetchResult,
  pageSourceFetchOption,
  pageSourceFetchResult,
  optionDefinition,
  optionUtils,
} from '@medialib/medialib-manga';
import {
  rawAuthor,
  rawChapter,
  rawFetchedMangaData,
  rawFetchedPageData,
  rawManga,
} from './rawTypes.js';
import { mangadexSourceSettings } from './mangadexSourceTypes.js';
import { ReadableStream } from 'stream/web';

const MANGADEX_ELEMENT_NUMBER_LIMIT = 100;
const MANGADEX_API_URL = 'https://api.mangadex.org';
const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0';

export default class MangadexSource<
  T extends mangadexSourceSettings = mangadexSourceSettings,
  U extends mangaSourceFetchOption = mangaSourceFetchOption,
  V extends mangaSourceFetchResult = mangaSourceFetchResult,
  W extends chapterSourceFetchOption = chapterSourceFetchOption,
  X extends chapterSourceFetchResult = chapterSourceFetchResult,
  Y extends pageSourceFetchOption = pageSourceFetchOption,
  Z extends pageSourceFetchResult = pageSourceFetchResult
> extends AbstractMangaSource<T, U, V, W, X, Y, Z> {
  private static settingsDefinition: optionDefinition<mangadexSourceSettings> =
    {
      url: {
        type: 'string',
        label: 'url',
        defaultValue: MANGADEX_API_URL,
        required: true,
      },
      userAgent: {
        type: 'string',
        label: 'user agent',
        defaultValue: DEFAULT_USER_AGENT,
        required: false,
      },
      defaultLanguage: {
        type: 'string',
        label: 'languages',
        defaultValue: 'en',
      },
    };

  protected webInstance!: AxiosInstance;

  public constructor(
    settingsDefinition = MangadexSource.settingsDefinition as optionDefinition<T>
  ) {
    super(settingsDefinition);
  }

  public resetWebInstance() {
    this.webInstance = this.createAxiosInstance();
  }

  private createAxiosInstance() {
    const { url, userAgent } = this.getSettings();
    return axios.create({
      baseURL: url,
      headers: {
        'User-Agent': userAgent,
      },
    });
  }

  public async fetchMangas(options: U) {
    const { defaultLanguage } = this.getSettings();
    const language = options.language || defaultLanguage;
    const queryOptions = {
      availableTranslatedLanguage: [language],
      limit: options.limit || MANGADEX_ELEMENT_NUMBER_LIMIT,
      offset: options.offset,
      ids: options.ids,
      title: options.text,
    };

    return this.webInstance
      .get('/manga', { params: queryOptions })
      .then((res) => res.data)
      .then(async (obtainedData: rawFetchedMangaData) => {
        const result = {
          limit: obtainedData.limit,
          offset: obtainedData.offset,
          total: obtainedData.total,
          content: [] as Array<Manga>,
        };

        const authorIds = obtainedData.data.map((rawManga: rawManga) =>
          getAuthorIdFromRawManga(rawManga)
        ) as Array<string>;

        const rawAuthors = await this.fetchRawAuthorsByIds(authorIds);

        result.content = obtainedData.data.map((mangaData) => {
          const authorId = mangaData.relationships.find(
            (rel) => rel.type === 'author'
          )?.id;

          const rawAuthor = rawAuthors.find(
            (rawAuthor) => rawAuthor.id === authorId
          );
          const authors =
            authorId && rawAuthor ? [rawAuthor.attributes.name] : [];

          const rawTags = mangaData.attributes.tags;
          const tags = getRawTagsWithPreferences(rawTags, [language]);
          const genres = getRawGenresWithPreferences(rawTags, [language]);
          const themes = getRawThemesWithPreferences(rawTags, [language]);
          const formats = getRawFormatsWithPreferences(rawTags, [language]);

          return new Manga({
            id: mangaData.id,
            title: objectUtils.getValueFromKeysWithPreferencesOrFirst(
              Object.assign(
                mangaData.attributes.title,
                ...mangaData.attributes.altTitles
              ),
              queryOptions.availableTranslatedLanguage
            ),
            authors: authors,
            description: objectUtils.getValueFromKeysWithPreferencesOrFirst(
              mangaData.attributes.description,
              queryOptions.availableTranslatedLanguage
            ),
            language: language,
            tags: tags,
            genres: genres,
            themes: themes,
            formats: formats,
            downloadCover: () => Promise.resolve(null),
          });
        });

        return result as V;
      });
  }

  public async fetchMangaById(id: string, options: U) {
    return {
      limit: 1,
      offset: 0,
      total: 1,
      content: [
        await this.fetchMangas({ ...options, ids: [id] } as U).then(
          ({ content }) => content[0]
        ),
      ],
    } as V;
  }

  public async getFetchMangaOptionsDefinition() {
    return {
      limit: { type: 'number', defaultValue: MANGADEX_ELEMENT_NUMBER_LIMIT },
      offset: { type: 'number', defaultValue: 0 },
      ids: { type: 'array' },
      text: { type: 'string' },
      language: {
        type: 'string',
        defaultValue: this.getSettings().defaultLanguage,
      },
    } as optionDefinition<U>;
  }

  public async fetchChaptersByManga(manga: Manga, options: W) {
    return this.fetchChaptersByMangaId(manga.getDetails().id, {
      language: manga.getDetails().language,
      ...options,
    }) as Promise<X>;
  }

  public async fetchChaptersByMangaId(id: string, options: W) {
    const { defaultLanguage } = this.getSettings();
    const language = options.language || defaultLanguage;
    const queryOptions = {
      translatedLanguage: [language],
    };
    const volumeList = this.fetchRawMangaVolumesById(id, queryOptions)
      .then((data) => data.volumes)
      .then(flattenRawVolumes);

    const volumesIds = (await volumeList).map((volume) => volume.id);

    return this.fetchChapters({ ...options, ids: volumesIds }) as Promise<X>;
  }

  public async fetchChapters(options: W) {
    const chapters = await this.fetchRawChaptersByIds(
      options?.ids || [],
      options
    ).then((rawChapters) =>
      rawChapters.map(
        (rawChapter) =>
          new Chapter({
            id: rawChapter.id,
            number: rawChapter.attributes.chapter,
            title: rawChapter.attributes.title,
            language: rawChapter.attributes.translatedLanguage,
            size: rawChapter.attributes.pages,
            downloadCover: () => Promise.resolve(null),
          })
      )
    );

    return {
      limit: chapters.length,
      offset: 0,
      total: chapters.length,
      content: sortChaptersByNumberAsc(chapters),
    } as X;
  }

  public async fetchChapterById(id: string, options: W) {
    const chapter = await this.fetchChapters({ ...options, ids: [id] }).then(
      (chapters) => chapters.content.find(Boolean)
    );
    return {
      limit: 1,
      offset: 0,
      total: 1,
      content: chapter ? [chapter] : [],
    } as X;
  }

  public async getFetchChapterOptionsDefinition() {
    return {
      limit: { type: 'number', defaultValue: MANGADEX_ELEMENT_NUMBER_LIMIT },
      offset: { type: 'number', defaultValue: 0 },
      ids: { type: 'array' },
      text: { type: 'string' },
      language: {
        type: 'string',
        defaultValue: this.getSettings().defaultLanguage,
      },
    } as optionDefinition<W>;
  }

  public async fetchPagesByChapter(chapter: Chapter, options: Y) {
    return this.fetchPagesByChapterId(chapter.getDetails().id, {
      language: chapter.getDetails().language,
      ...options,
    });
  }

  public async fetchPagesByChapterId(id: string, options: Y) {
    const { defaultLanguage } = this.getSettings();
    const language = options.language || defaultLanguage;
    const pages: Array<Page> = await this.webInstance
      .get(`/at-home/server/${id}`)
      .then<rawFetchedPageData>((res) => res.data)
      .then((pagesData) => {
        const baseUrl = `${pagesData.baseUrl}/data/${pagesData.chapter.hash}`;
        return pagesData.chapter.data.map(
          (pageUrlSuffix, i) =>
            new Page({
              id: `${i}`,
              title: `${i}`,
              language: language,
              uri: `${baseUrl}/${pageUrlSuffix}`,
              download: () => this.downloadFile(`${baseUrl}/${pageUrlSuffix}`),
            })
        );
      });
    return {
      limit: pages.length,
      offset: 0,
      total: pages.length,
      content: pages,
    } as Z;
  }

  public async getFetchPageOptionsDefinition() {
    return {
      limit: { type: 'number', defaultValue: MANGADEX_ELEMENT_NUMBER_LIMIT },
      offset: { type: 'number', defaultValue: 0 },
      ids: { type: 'array' },
      text: { type: 'string' },
      language: {
        type: 'string',
        defaultValue: this.getSettings().defaultLanguage,
      },
    } as optionDefinition<Y>;
  }

  //TODO: set options type
  private async fetchRawAuthorsByIds(
    ids: Array<string> = [],
    options: any = {}
  ) {
    const limit = MANGADEX_ELEMENT_NUMBER_LIMIT;
    const splitedIds = arrayUtils.splitArrayInMaxSizeChunks(ids, limit);

    return promiseUtils.chainPromisesOnArray(
      splitedIds,
      async (idArray, results: Array<rawAuthor>) => {
        const queryOptions = {
          ...options,
          limit: limit,
          ids: idArray,
        };
        const res = await this.webInstance
          .get(`/author`, { params: queryOptions })
          .then((res) => res.data)
          .then((obtainedData) => obtainedData.data);
        return [...results, ...res];
      },
      []
    ) as Array<rawAuthor>;
  }

  private async fetchRawMangaVolumesById(id: string, options: any = {}) {
    const { languages } = this.getSettings();
    const queryOptions = {
      translatedLanguage: languages,
      ...options,
    };
    return this.webInstance
      .get(`/manga/${id}/aggregate`, { params: queryOptions })
      .then((res) => res.data);
  }

  private async fetchRawChaptersByIds(ids: Array<string> = [], options: W) {
    const limit = MANGADEX_ELEMENT_NUMBER_LIMIT;
    const splitedIds = arrayUtils.splitArrayInMaxSizeChunks(ids, limit);

    const { defaultLanguage } = this.getSettings();
    const language = options.language || defaultLanguage;

    return promiseUtils.chainPromisesOnArray(
      splitedIds,
      async (idArray, results: Array<rawChapter>) => {
        const queryOptions = {
          translatedLanguage: [language],
          limit: limit,
          ids: idArray,
          title: options.text,
          //TODO: order
        };
        const res = await this.webInstance
          .get(`/chapter`, { params: queryOptions })
          .then((res) => res.data)
          .then((obtainedData) => obtainedData.data);
        return [...results, ...res];
      },
      []
    );
  }

  public downloadFile(
    uri: string,
    options: any = {}
  ): Promise<{ type: string; data: ReadableStream<ArrayBuffer> }> {
    return this.webInstance
      .get(uri, { responseType: 'stream', ...options })
      .then((response) => ({
        type: response.headers['content-type']?.split('/')?.[1] || 'jpeg',
        data: response.data,
      }));
  }
}
