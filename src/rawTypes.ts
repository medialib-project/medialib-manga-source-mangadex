export interface rawTag {
  id: string;
  type: string;
  attributes: {
    name: { [key: string]: string };
    description: { [key: string]: string };
    group: string;
    version: number;
  };
  relationships: Array<rawRelationship>;
}

export interface rawRelationship {
  id: string;
  type: string;
  related: string;
}

export interface rawManga {
  id: string;
  type: string;
  attributes: {
    isLocked: boolean;
    links: { [key: string]: string };
    originalLanguage: string;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: string;
    status: string;
    contentRating: string;
    title: { [key: string]: string };
    altTitles: Array<{ [key: string]: string }>;
    description: { [key: string]: string };
    year: number;
    tags: Array<rawTag>;
    state: string;
    chapterNumbersResetOnNewVolume: boolean;
    version: number;
    createdAt: string;
    updatedAt: string;
    availableTranslatedLanguages: Array<string | null>;
    latestUploadedChapter: string;
  };
  relationships: Array<rawRelationship>;
}

export interface rawAggregateVolume {
  volume: string;
  count: number;
  chapters: {
    [key: string]: {
      chapter: string;
      id: string;
      others: Array<string>;
      count: number;
    };
  };
}

export interface rawAggregateVolumes {
  [key: string]: rawAggregateVolume;
}

export interface rawFetchedData {
  result: string;
  response: string;
  data: Array<any>;
  limit: number;
  offset: number;
  total: number;
}

export interface rawFetchedMangaData extends rawFetchedData {
  data: Array<rawManga>;
}

export interface rawAuthor {
  id: string;
  type: string;
  attributes: {
    name: string;
    imageUrl: string | null;
    biography: { [key: string]: string };
    twitter: string | null;
    pixiv: string | null;
    melonBook: string | null;
    fanBox: string | null;
    booth: string | null;
    nicoVideo: string | null;
    skeb: string | null;
    fantia: string | null;
    tumblr: string | null;
    youtube: string | null;
    weibo: string | null;
    naver: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  relationships: Array<rawRelationship>;
}

export interface rawFetchedAuthorData extends rawFetchedData {
  data: Array<rawAuthor>;
}

export interface rawChapter {
  id: string;
  type: string;
  attributes: {
    volume: string;
    chapter: string;
    title: string;
    translatedLanguage: string;
    externalUrl: string | null;
    publishAt: string;
    readableAt: string;
    createdAt: string;
    updatedAt: string;
    pages: number;
    version: number;
  };
  relationships: Array<rawRelationship>;
}

export interface rawFetchedChapterData extends rawFetchedData {
  data: Array<rawChapter>;
}

export interface rawFetchedPageData extends rawFetchedData {
  result: string;
  baseUrl: string;
  chapter: {
    hash: string;
    data: Array<string>;
    dataSaver: Array<string>;
  };
}
