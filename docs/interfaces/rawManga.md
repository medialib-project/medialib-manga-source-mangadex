[@medialib/medialib-manga-source-mangadex](../README.md) / [Exports](../modules.md) / rawManga

# Interface: rawManga

## Table of contents

### Properties

- [attributes](rawManga.md#attributes)
- [id](rawManga.md#id)
- [relationships](rawManga.md#relationships)
- [type](rawManga.md#type)

## Properties

### attributes

• **attributes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `altTitles` | { `[key: string]`: `string`;  }[] |
| `availableTranslatedLanguages` | (``null`` \| `string`)[] |
| `chapterNumbersResetOnNewVolume` | `boolean` |
| `contentRating` | `string` |
| `createdAt` | `string` |
| `description` | { `[key: string]`: `string`;  } |
| `isLocked` | `boolean` |
| `lastChapter` | `string` |
| `lastVolume` | `string` |
| `latestUploadedChapter` | `string` |
| `links` | { `[key: string]`: `string`;  } |
| `originalLanguage` | `string` |
| `publicationDemographic` | `string` |
| `state` | `string` |
| `status` | `string` |
| `tags` | [`rawTag`](rawTag.md)[] |
| `title` | { `[key: string]`: `string`;  } |
| `updatedAt` | `string` |
| `version` | `number` |
| `year` | `number` |

#### Defined in

[src/rawTypes.ts:22](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/rawTypes.ts#L22)

___

### id

• **id**: `string`

#### Defined in

[src/rawTypes.ts:20](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/rawTypes.ts#L20)

___

### relationships

• **relationships**: [`rawRelationship`](rawRelationship.md)[]

#### Defined in

[src/rawTypes.ts:44](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/rawTypes.ts#L44)

___

### type

• **type**: `string`

#### Defined in

[src/rawTypes.ts:21](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/rawTypes.ts#L21)
