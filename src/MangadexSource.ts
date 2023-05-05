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
  sourceSettingsDefinitionType,
  mangaSourceOptionsType,
  pageSourceOptionsType,
  fetchPageResultType,
  fetchMangaResultType,
  chapterSourceOptionsType,
  sourceSettingsType,
} from '@medialib/medialib-manga';
import {
  rawAuthor,
  rawChapter,
  rawFetchedMangaData,
  rawFetchedPageData,
  rawManga,
} from './rawTypes.js';
import { mangadexSourceSettingsType } from './mangadexTypes.js';
import { ReadableStream } from 'stream/web';

const MANGADEX_ELEMENT_NUMBER_LIMIT = 100;

export default class MangadexSource extends AbstractMangaSource {
  protected static settingsDefinition: sourceSettingsDefinitionType = {
    url: { type: 'string' },
    userAgent: { type: 'string' },
    languages: { type: 'array', value: { type: 'string' } },
  };
  protected static defaultSettings: mangadexSourceSettingsType = {
    url: 'https://api.mangadex.org',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0',
    languages: ['en'],
  };

  protected webInstance!: AxiosInstance;

  public constructor(settings?: sourceSettingsType) {
    super(settings);
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

  public getSettings(): mangadexSourceSettingsType {
    return super.getSettings() as mangadexSourceSettingsType;
  }

  //TODO: add mangadex options
  //@ts-ignore
  public async getFetchOptionsDefinition() {
    return {
      limit: { type: 'integer', value: MANGADEX_ELEMENT_NUMBER_LIMIT },
      offset: { type: 'integer', value: 0 },
    };
  }

  public async fetchMangas(
    options: mangaSourceOptionsType
  ): Promise<fetchMangaResultType> {
    const { languages } = this.getSettings();
    const queryOptions = {
      availableTranslatedLanguage: languages,
      limit: MANGADEX_ELEMENT_NUMBER_LIMIT,
      ...options,
    };
    const wantedLanguages = queryOptions.availableTranslatedLanguage || [];

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
          const tags = getRawTagsWithPreferences(rawTags, wantedLanguages);
          const genres = getRawGenresWithPreferences(rawTags, wantedLanguages);
          const themes = getRawThemesWithPreferences(rawTags, wantedLanguages);
          const formats = getRawFormatsWithPreferences(
            rawTags,
            wantedLanguages
          );

          const availableLanguages =
            mangaData.attributes.availableTranslatedLanguages.filter((l) => l);

          return new Manga({
            id: mangaData.id,
            title: objectUtils.getValueFromKeysWithPreferencesOrFirst(
              Object.assign(
                mangaData.attributes.title,
                ...mangaData.attributes.altTitles
              ),
              wantedLanguages
            ),
            authors: authors,
            description: objectUtils.getValueFromKeysWithPreferencesOrFirst(
              mangaData.attributes.description,
              wantedLanguages
            ),
            languages: wantedLanguages.filter((language) =>
              availableLanguages.includes(language)
            ),
            tags: tags,
            genres: genres,
            themes: themes,
            formats: formats,
          });
        });

        return result;
      });
  }

  public async fetchMangaById(id: string): Promise<fetchMangaResultType> {
    return {
      content: [
        await this.fetchMangas({ ids: [id] }).then(({ content }) => content[0]),
      ],
    };
  }

  public async fetchChaptersByManga(
    manga: Manga,
    options: chapterSourceOptionsType = {}
  ) {
    return this.fetchChaptersByMangaId(manga.getId(), {
      translatedLanguage: manga.getLanguages(),
      ...options,
    });
  }

  public async fetchChaptersByMangaId(
    id: string,
    options: chapterSourceOptionsType = {}
  ) {
    const { languages } = this.getSettings();
    const queryOptions = {
      translatedLanguage: languages,
      ...options,
    };
    const volumeList = this.fetchRawMangaVolumesById(id, queryOptions)
      .then((data) => data.volumes)
      .then(flattenRawVolumes);

    const volumesIds = (await volumeList).map((volume) => volume.id);

    return this.fetchChapters({ ids: volumesIds });
  }

  public async fetchChapters(options: chapterSourceOptionsType = {}) {
    const chapters = await this.fetchRawChaptersByIds(
      options.ids || [],
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
          })
      )
    );

    return { content: sortChaptersByNumberAsc(chapters) };
  }

  public async fetchChapterById(id: string) {
    const chapter = await this.fetchChapters({ ids: [id] }).then((chapters) =>
      chapters.content.find(Boolean)
    );
    return { content: chapter ? [chapter] : [] };
  }

  public async fetchPagesByChapter(chapter: Chapter) {
    return this.fetchPagesByChapterId(chapter.getId());
  }

  public async fetchPagesByChapterId(id: string) {
    return {
      content: await this.webInstance
        .get(`/at-home/server/${id}`)
        .then<rawFetchedPageData>((res) => res.data)
        .then((pagesData) => {
          const baseUrl = `${pagesData.baseUrl}/data/${pagesData.chapter.hash}`;
          return pagesData.chapter.data.map(
            (pageUrlSuffix, i) =>
              new Page({
                id: `${i}`,
                title: `${i}`,
                uri: `${baseUrl}/${pageUrlSuffix}`,
                download: () =>
                  this.downloadFile(`${baseUrl}/${pageUrlSuffix}`),
              })
          );
        }),
    };
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

  private async fetchRawChaptersByIds(
    ids: Array<string> = [],
    options: any = {}
  ) {
    const limit = MANGADEX_ELEMENT_NUMBER_LIMIT;
    const splitedIds = arrayUtils.splitArrayInMaxSizeChunks(ids, limit);

    return promiseUtils.chainPromisesOnArray(
      splitedIds,
      async (idArray, results: Array<rawChapter>) => {
        const queryOptions = {
          ...options,
          limit: limit,
          ids: idArray,
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
