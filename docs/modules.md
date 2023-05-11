[@medialib/medialib-manga-source-mangadex](README.md) / Exports

# @medialib/medialib-manga-source-mangadex

## Table of contents

### Namespaces

- [arrayUtils](modules/arrayUtils.md)
- [compareUtils](modules/compareUtils.md)
- [mangadexUtils](modules/mangadexUtils.md)
- [objectUtils](modules/objectUtils.md)
- [optionUtils](modules/optionUtils.md)
- [promiseUtils](modules/promiseUtils.md)

### Classes

- [AbstractAddon](classes/AbstractAddon.md)
- [AbstractAddonManager](classes/AbstractAddonManager.md)
- [AbstractMangaSource](classes/AbstractMangaSource.md)
- [AbstractMangaSourceAddon](classes/AbstractMangaSourceAddon.md)
- [AbstractMedia](classes/AbstractMedia.md)
- [AbstractMediaSource](classes/AbstractMediaSource.md)
- [AbstractMediaSourceAddon](classes/AbstractMediaSourceAddon.md)
- [AbstractWebSource](classes/AbstractWebSource.md)
- [AddonManagerCenter](classes/AddonManagerCenter.md)
- [AddonMediaSourceManager](classes/AddonMediaSourceManager.md)
- [Chapter](classes/Chapter.md)
- [Manga](classes/Manga.md)
- [MangaSourceAddonManager](classes/MangaSourceAddonManager.md)
- [MangadexMangaSourceAddon](classes/MangadexMangaSourceAddon.md)
- [MangadexSource](classes/MangadexSource.md)
- [Page](classes/Page.md)

### Interfaces

- [rawAggregateVolume](interfaces/rawAggregateVolume.md)
- [rawAggregateVolumes](interfaces/rawAggregateVolumes.md)
- [rawAuthor](interfaces/rawAuthor.md)
- [rawChapter](interfaces/rawChapter.md)
- [rawFetchedAuthorData](interfaces/rawFetchedAuthorData.md)
- [rawFetchedChapterData](interfaces/rawFetchedChapterData.md)
- [rawFetchedData](interfaces/rawFetchedData.md)
- [rawFetchedMangaData](interfaces/rawFetchedMangaData.md)
- [rawFetchedPageData](interfaces/rawFetchedPageData.md)
- [rawManga](interfaces/rawManga.md)
- [rawRelationship](interfaces/rawRelationship.md)
- [rawTag](interfaces/rawTag.md)

### Type Aliases

- [addonType](modules.md#addontype)
- [basicAddonDetails](modules.md#basicaddondetails)
- [basicAddonManagerCenterDetails](modules.md#basicaddonmanagercenterdetails)
- [basicAddonManagerDetails](modules.md#basicaddonmanagerdetails)
- [basicAddonResources](modules.md#basicaddonresources)
- [basicAddonSettings](modules.md#basicaddonsettings)
- [basicMangaSourceFetchOption](modules.md#basicmangasourcefetchoption)
- [basicMediaDetails](modules.md#basicmediadetails)
- [chapterDetails](modules.md#chapterdetails)
- [chapterSourceFetchOption](modules.md#chaptersourcefetchoption)
- [chapterSourceFetchResult](modules.md#chaptersourcefetchresult)
- [diff](modules.md#diff)
- [diffType](modules.md#difftype)
- [downloadImage](modules.md#downloadimage)
- [mangaDetails](modules.md#mangadetails)
- [mangaSourceAddonDetails](modules.md#mangasourceaddondetails)
- [mangaSourceAddonManagerDetails](modules.md#mangasourceaddonmanagerdetails)
- [mangaSourceAddonResources](modules.md#mangasourceaddonresources)
- [mangaSourceAddonSettings](modules.md#mangasourceaddonsettings)
- [mangaSourceFetchOption](modules.md#mangasourcefetchoption)
- [mangaSourceFetchResult](modules.md#mangasourcefetchresult)
- [mangaSourceSettings](modules.md#mangasourcesettings)
- [mangadexSourceAddonDetails](modules.md#mangadexsourceaddondetails)
- [mangadexSourceAddonResources](modules.md#mangadexsourceaddonresources)
- [mangadexSourceSettings](modules.md#mangadexsourcesettings)
- [mediaSourceAddonDetails](modules.md#mediasourceaddondetails)
- [mediaSourceAddonManagerDetails](modules.md#mediasourceaddonmanagerdetails)
- [mediaSourceAddonResources](modules.md#mediasourceaddonresources)
- [mediaSourceAddonSettings](modules.md#mediasourceaddonsettings)
- [mediaSourceFetchOption](modules.md#mediasourcefetchoption)
- [mediaSourceFetchResult](modules.md#mediasourcefetchresult)
- [mediaSourceSettings](modules.md#mediasourcesettings)
- [optionDefinition](modules.md#optiondefinition)
- [pageDetails](modules.md#pagedetails)
- [pageSourceFetchOption](modules.md#pagesourcefetchoption)
- [pageSourceFetchResult](modules.md#pagesourcefetchresult)
- [webMediaSourceFetchOption](modules.md#webmediasourcefetchoption)
- [webMediaSourceFetchResult](modules.md#webmediasourcefetchresult)
- [webMediaSourceSettings](modules.md#webmediasourcesettings)

## Type Aliases

### addonType

Ƭ **addonType**: ``"addon"`` \| `string` & {}

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:15

___

### basicAddonDetails

Ƭ **basicAddonDetails**: { `apiVersion`: `string` ; `authors`: `string`[] ; `dependencies`: `string`[] ; `description`: `string` ; `id`: `string` ; `tags`: `string`[] ; `title`: `string` ; `type`: [`addonType`](modules.md#addontype) ; `version`: `string`  } & `Record`<`string`, `unknown`\>

Basic details that every addon is expected to have.

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:4

___

### basicAddonManagerCenterDetails

Ƭ **basicAddonManagerCenterDetails**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonManagerCenterTypes.d.ts:1

___

### basicAddonManagerDetails

Ƭ **basicAddonManagerDetails**: { `type`: [`addonType`](modules.md#addontype)  } & `Record`<`string`, `unknown`\>

Basic details that every addon manager is expected to have.

**`Param`**

correspond to the type of addons the manager accept.

#### Defined in

node_modules/@addonlib/addonlib/dist/addonManagerTypes.d.ts:7

___

### basicAddonResources

Ƭ **basicAddonResources**: {} & `Record`<`string`, `unknown`\>

Basic resources that every addon is expected to have.

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:19

___

### basicAddonSettings

Ƭ **basicAddonSettings**: {} & `Record`<`string`, `unknown`\>

Basic settings that every addon is expected to have

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:23

___

### basicMangaSourceFetchOption

Ƭ **basicMangaSourceFetchOption**: { `ids?`: `string`[] ; `language?`: `string` ; `text?`: `string`  } & [`webMediaSourceFetchOption`](modules.md#webmediasourcefetchoption)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:8

___

### basicMediaDetails

Ƭ **basicMediaDetails**: { `id`: `string` ; `title`: `string`  } & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@medialib/medialib/dist/mediaTypes.d.ts:1

___

### chapterDetails

Ƭ **chapterDetails**: { `downloadCover`: [`downloadImage`](modules.md#downloadimage) ; `language`: `string` ; `number`: `string` ; `size`: `number`  } & [`basicMediaDetails`](modules.md#basicmediadetails)

#### Defined in

node_modules/@medialib/medialib-manga/dist/chapter/chapterTypes.d.ts:3

___

### chapterSourceFetchOption

Ƭ **chapterSourceFetchOption**: {} & [`basicMangaSourceFetchOption`](modules.md#basicmangasourcefetchoption)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:15

___

### chapterSourceFetchResult

Ƭ **chapterSourceFetchResult**<`T`\>: {} & [`webMediaSourceFetchResult`](modules.md#webmediasourcefetchresult)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Chapter`](classes/Chapter.md) = [`Chapter`](classes/Chapter.md) |

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:16

___

### diff

Ƭ **diff**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__new` | `any` |
| `__old` | `any` |

#### Defined in

node_modules/@medialib/medialib/dist/utils/diffType.d.ts:1

___

### diffType

Ƭ **diffType**: `Object`

#### Index signature

▪ [key: `string`]: [`diff`](modules.md#diff) \| [`diffType`](modules.md#difftype)

#### Defined in

node_modules/@medialib/medialib/dist/utils/diffType.d.ts:5

___

### downloadImage

Ƭ **downloadImage**: () => `Promise`<{ `data`: `ReadableStream`<`ArrayBuffer`\> ; `type`: `string`  } \| ``null``\>

#### Type declaration

▸ (): `Promise`<{ `data`: `ReadableStream`<`ArrayBuffer`\> ; `type`: `string`  } \| ``null``\>

##### Returns

`Promise`<{ `data`: `ReadableStream`<`ArrayBuffer`\> ; `type`: `string`  } \| ``null``\>

#### Defined in

node_modules/@medialib/medialib-manga/dist/downloadImageTypes.d.ts:3

___

### mangaDetails

Ƭ **mangaDetails**: { `authors`: `string`[] ; `description`: `string` ; `downloadCover`: [`downloadImage`](modules.md#downloadimage) ; `formats`: `string`[] ; `genres`: `string`[] ; `language`: `string` ; `tags`: `string`[] ; `themes`: `string`[]  } & [`basicMediaDetails`](modules.md#basicmediadetails)

#### Defined in

node_modules/@medialib/medialib-manga/dist/manga/mangaTypes.d.ts:3

___

### mangaSourceAddonDetails

Ƭ **mangaSourceAddonDetails**: { `type`: ``"media-source.manga"`` \| ``"media-source"`` \| `string` & {}  } & [`mediaSourceAddonDetails`](modules.md#mediasourceaddondetails)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceAddonTypes.d.ts:2

___

### mangaSourceAddonManagerDetails

Ƭ **mangaSourceAddonManagerDetails**: {} & [`mediaSourceAddonManagerDetails`](modules.md#mediasourceaddonmanagerdetails)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceAddonManagerTypes.d.ts:2

___

### mangaSourceAddonResources

Ƭ **mangaSourceAddonResources**: {} & [`mediaSourceAddonResources`](modules.md#mediasourceaddonresources)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceAddonTypes.d.ts:5

___

### mangaSourceAddonSettings

Ƭ **mangaSourceAddonSettings**: {} & [`mediaSourceAddonSettings`](modules.md#mediasourceaddonsettings)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceAddonTypes.d.ts:6

___

### mangaSourceFetchOption

Ƭ **mangaSourceFetchOption**: {} & [`basicMangaSourceFetchOption`](modules.md#basicmangasourcefetchoption)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:13

___

### mangaSourceFetchResult

Ƭ **mangaSourceFetchResult**<`T`\>: {} & [`webMediaSourceFetchResult`](modules.md#webmediasourcefetchresult)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Manga`](classes/Manga.md) = [`Manga`](classes/Manga.md) |

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:14

___

### mangaSourceSettings

Ƭ **mangaSourceSettings**: { `defaultLanguage`: `string`  } & [`webMediaSourceSettings`](modules.md#webmediasourcesettings)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:5

___

### mangadexSourceAddonDetails

Ƭ **mangadexSourceAddonDetails**: {} & [`mangaSourceAddonDetails`](modules.md#mangasourceaddondetails)

#### Defined in

[src/mangadexSourceAddonTypes.ts:6](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/mangadexSourceAddonTypes.ts#L6)

___

### mangadexSourceAddonResources

Ƭ **mangadexSourceAddonResources**: {} & [`mangaSourceAddonResources`](modules.md#mangasourceaddonresources)

#### Defined in

[src/mangadexSourceAddonTypes.ts:8](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/mangadexSourceAddonTypes.ts#L8)

___

### mangadexSourceSettings

Ƭ **mangadexSourceSettings**: {} & [`mangaSourceSettings`](modules.md#mangasourcesettings)

#### Defined in

[src/mangadexSourceTypes.ts:3](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/mangadexSourceTypes.ts#L3)

___

### mediaSourceAddonDetails

Ƭ **mediaSourceAddonDetails**: { `type`: ``"media-source"`` \| `string` & {}  } & [`basicAddonDetails`](modules.md#basicaddondetails)

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceAddonTypes.d.ts:2

___

### mediaSourceAddonManagerDetails

Ƭ **mediaSourceAddonManagerDetails**: {} & [`basicAddonManagerDetails`](modules.md#basicaddonmanagerdetails)

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceAddonManagerTypes.d.ts:2

___

### mediaSourceAddonResources

Ƭ **mediaSourceAddonResources**: {} & [`basicAddonResources`](modules.md#basicaddonresources)

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceAddonTypes.d.ts:5

___

### mediaSourceAddonSettings

Ƭ **mediaSourceAddonSettings**: {} & [`basicAddonSettings`](modules.md#basicaddonsettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceAddonTypes.d.ts:6

___

### mediaSourceFetchOption

Ƭ **mediaSourceFetchOption**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceTypes.d.ts:3

___

### mediaSourceFetchResult

Ƭ **mediaSourceFetchResult**<`T`\>: { `content`: `T`[]  } & `Record`<`string`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMedia`](classes/AbstractMedia.md) = [`AbstractMedia`](classes/AbstractMedia.md) |

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceTypes.d.ts:4

___

### mediaSourceSettings

Ƭ **mediaSourceSettings**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@medialib/medialib/dist/source/mediaSourceTypes.d.ts:2

___

### optionDefinition

Ƭ **optionDefinition**<`T`\>: { [K in keyof T]: Object }

Give information on options type. (specially useful to on runtime)

**`Example`**

```ts
type customOption = {
 fieldA: boolean,
 fieldB: string
}

type customOptionDefinition = optionDefinition<customOption>

const customOptionsEx: customOption = {
 fieldA: true,
 fieldB: "abcd"
}

const customOptionsDefinitionEx: customOptionDefinition = {
 fieldA: {
   type: "boolean",
   label: "A field",
   defaultValue: false,
   required: true
 },
 fieldB: {
   type: "string",
   label: "B field",
   defaultValue: "",
   required: false
 },
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Defined in

node_modules/@addonlib/addonlib/dist/optionTypes.d.ts:34

___

### pageDetails

Ƭ **pageDetails**: { `download`: [`downloadImage`](modules.md#downloadimage) ; `language`: `string` ; `uri`: `string`  } & [`basicMediaDetails`](modules.md#basicmediadetails)

#### Defined in

node_modules/@medialib/medialib-manga/dist/page/pageTypes.d.ts:3

___

### pageSourceFetchOption

Ƭ **pageSourceFetchOption**: {} & [`basicMangaSourceFetchOption`](modules.md#basicmangasourcefetchoption)

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:17

___

### pageSourceFetchResult

Ƭ **pageSourceFetchResult**<`T`\>: {} & [`webMediaSourceFetchResult`](modules.md#webmediasourcefetchresult)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Page`](classes/Page.md) = [`Page`](classes/Page.md) |

#### Defined in

node_modules/@medialib/medialib-manga/dist/mangaSourceTypes.d.ts:18

___

### webMediaSourceFetchOption

Ƭ **webMediaSourceFetchOption**: { `limit?`: `number` ; `offset?`: `number`  } & [`mediaSourceFetchOption`](modules.md#mediasourcefetchoption)

#### Defined in

node_modules/@medialib/medialib/dist/source/web/webMediaSourceTypes.d.ts:7

___

### webMediaSourceFetchResult

Ƭ **webMediaSourceFetchResult**<`T`\>: { `limit?`: `number` ; `offset?`: `number` ; `total?`: `number`  } & [`mediaSourceFetchResult`](modules.md#mediasourcefetchresult)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMedia`](classes/AbstractMedia.md) = [`AbstractMedia`](classes/AbstractMedia.md) |

#### Defined in

node_modules/@medialib/medialib/dist/source/web/webMediaSourceTypes.d.ts:11

___

### webMediaSourceSettings

Ƭ **webMediaSourceSettings**: { `url`: `string` ; `userAgent`: `string`  } & [`mediaSourceSettings`](modules.md#mediasourcesettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/web/webMediaSourceTypes.d.ts:3
