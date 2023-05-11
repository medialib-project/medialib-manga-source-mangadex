[@medialib/medialib-manga-source-mangadex](../README.md) / [Exports](../modules.md) / mangadexUtils

# Namespace: mangadexUtils

## Table of contents

### Functions

- [flattenRawVolumes](mangadexUtils.md#flattenrawvolumes)
- [getAuthorIdFromRawManga](mangadexUtils.md#getauthoridfromrawmanga)
- [getRawFormatsWithPreferences](mangadexUtils.md#getrawformatswithpreferences)
- [getRawGenresWithPreferences](mangadexUtils.md#getrawgenreswithpreferences)
- [getRawTagsWithPreferences](mangadexUtils.md#getrawtagswithpreferences)
- [getRawThemesWithPreferences](mangadexUtils.md#getrawthemeswithpreferences)
- [sortChaptersByNumberAsc](mangadexUtils.md#sortchaptersbynumberasc)

## Functions

### flattenRawVolumes

▸ **flattenRawVolumes**(`rawAggregateVolumes`): { `id`: `string` ; `number`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawAggregateVolumes` | [`rawAggregateVolumes`](../interfaces/rawAggregateVolumes.md) |

#### Returns

{ `id`: `string` ; `number`: `string`  }[]

#### Defined in

[src/utils/mangadexUtils.ts:53](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L53)

___

### getAuthorIdFromRawManga

▸ **getAuthorIdFromRawManga**(`rawManga`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawManga` | [`rawManga`](../interfaces/rawManga.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/mangadexUtils.ts:48](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L48)

___

### getRawFormatsWithPreferences

▸ **getRawFormatsWithPreferences**(`rawTags`, `preferences`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTags` | [`rawTag`](../interfaces/rawTag.md)[] |
| `preferences` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/utils/mangadexUtils.ts:38](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L38)

___

### getRawGenresWithPreferences

▸ **getRawGenresWithPreferences**(`rawTags`, `preferences`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTags` | [`rawTag`](../interfaces/rawTag.md)[] |
| `preferences` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/utils/mangadexUtils.ts:18](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L18)

___

### getRawTagsWithPreferences

▸ **getRawTagsWithPreferences**(`rawTags`, `preferences`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTags` | [`rawTag`](../interfaces/rawTag.md)[] |
| `preferences` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/utils/mangadexUtils.ts:4](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L4)

___

### getRawThemesWithPreferences

▸ **getRawThemesWithPreferences**(`rawTags`, `preferences`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTags` | [`rawTag`](../interfaces/rawTag.md)[] |
| `preferences` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/utils/mangadexUtils.ts:28](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L28)

___

### sortChaptersByNumberAsc

▸ **sortChaptersByNumberAsc**(`chapters`): [`Chapter`](../classes/Chapter.md)<[`chapterDetails`](../modules.md#chapterdetails)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chapters` | [`Chapter`](../classes/Chapter.md)<[`chapterDetails`](../modules.md#chapterdetails)\>[] |

#### Returns

[`Chapter`](../classes/Chapter.md)<[`chapterDetails`](../modules.md#chapterdetails)\>[]

#### Defined in

[src/utils/mangadexUtils.ts:61](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/utils/mangadexUtils.ts#L61)
