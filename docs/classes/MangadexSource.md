[@medialib/medialib-manga-source-mangadex](../README.md) / [Exports](../modules.md) / MangadexSource

# Class: MangadexSource<T, U, V, W, X, Y, Z\>

Source that fetch online medias depending on settings and options

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`mangadexSourceSettings`](../modules.md#mangadexsourcesettings) = [`mangadexSourceSettings`](../modules.md#mangadexsourcesettings) |
| `U` | extends [`mangaSourceFetchOption`](../modules.md#mangasourcefetchoption) = [`mangaSourceFetchOption`](../modules.md#mangasourcefetchoption) |
| `V` | extends [`mangaSourceFetchResult`](../modules.md#mangasourcefetchresult) = [`mangaSourceFetchResult`](../modules.md#mangasourcefetchresult) |
| `W` | extends [`chapterSourceFetchOption`](../modules.md#chaptersourcefetchoption) = [`chapterSourceFetchOption`](../modules.md#chaptersourcefetchoption) |
| `X` | extends [`chapterSourceFetchResult`](../modules.md#chaptersourcefetchresult) = [`chapterSourceFetchResult`](../modules.md#chaptersourcefetchresult) |
| `Y` | extends [`pageSourceFetchOption`](../modules.md#pagesourcefetchoption) = [`pageSourceFetchOption`](../modules.md#pagesourcefetchoption) |
| `Z` | extends [`pageSourceFetchResult`](../modules.md#pagesourcefetchresult) = [`pageSourceFetchResult`](../modules.md#pagesourcefetchresult) |

## Hierarchy

- [`AbstractMangaSource`](AbstractMangaSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

  ↳ **`MangadexSource`**

## Table of contents

### Constructors

- [constructor](MangadexSource.md#constructor)

### Properties

- [webInstance](MangadexSource.md#webinstance)
- [captureRejectionSymbol](MangadexSource.md#capturerejectionsymbol)
- [captureRejections](MangadexSource.md#capturerejections)
- [defaultMaxListeners](MangadexSource.md#defaultmaxlisteners)
- [errorMonitor](MangadexSource.md#errormonitor)
- [settingsDefinition](MangadexSource.md#settingsdefinition)

### Methods

- [addListener](MangadexSource.md#addlistener)
- [createAxiosInstance](MangadexSource.md#createaxiosinstance)
- [downloadFile](MangadexSource.md#downloadfile)
- [emit](MangadexSource.md#emit)
- [eventNames](MangadexSource.md#eventnames)
- [fetch](MangadexSource.md#fetch)
- [fetchChapterById](MangadexSource.md#fetchchapterbyid)
- [fetchChapters](MangadexSource.md#fetchchapters)
- [fetchChaptersByManga](MangadexSource.md#fetchchaptersbymanga)
- [fetchChaptersByMangaId](MangadexSource.md#fetchchaptersbymangaid)
- [fetchMangaById](MangadexSource.md#fetchmangabyid)
- [fetchMangas](MangadexSource.md#fetchmangas)
- [fetchPagesByChapter](MangadexSource.md#fetchpagesbychapter)
- [fetchPagesByChapterId](MangadexSource.md#fetchpagesbychapterid)
- [fetchRawAuthorsByIds](MangadexSource.md#fetchrawauthorsbyids)
- [fetchRawChaptersByIds](MangadexSource.md#fetchrawchaptersbyids)
- [fetchRawMangaVolumesById](MangadexSource.md#fetchrawmangavolumesbyid)
- [getFetchChapterOptionsDefinition](MangadexSource.md#getfetchchapteroptionsdefinition)
- [getFetchMangaOptionsDefinition](MangadexSource.md#getfetchmangaoptionsdefinition)
- [getFetchOptionsDefinition](MangadexSource.md#getfetchoptionsdefinition)
- [getFetchPageOptionsDefinition](MangadexSource.md#getfetchpageoptionsdefinition)
- [getMaxListeners](MangadexSource.md#getmaxlisteners)
- [getSettings](MangadexSource.md#getsettings)
- [getSettingsDefinition](MangadexSource.md#getsettingsdefinition)
- [listenerCount](MangadexSource.md#listenercount)
- [listeners](MangadexSource.md#listeners)
- [off](MangadexSource.md#off)
- [on](MangadexSource.md#on)
- [onSettingsChange](MangadexSource.md#onsettingschange)
- [once](MangadexSource.md#once)
- [prependListener](MangadexSource.md#prependlistener)
- [prependOnceListener](MangadexSource.md#prependoncelistener)
- [rawListeners](MangadexSource.md#rawlisteners)
- [removeAllListeners](MangadexSource.md#removealllisteners)
- [removeListener](MangadexSource.md#removelistener)
- [resetWebInstance](MangadexSource.md#resetwebinstance)
- [setMaxListeners](MangadexSource.md#setmaxlisteners)
- [setSettings](MangadexSource.md#setsettings)
- [getEventListeners](MangadexSource.md#geteventlisteners)
- [listenerCount](MangadexSource.md#listenercount-1)
- [on](MangadexSource.md#on-1)
- [once](MangadexSource.md#once-1)
- [setMaxListeners](MangadexSource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new MangadexSource**<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`settingsDefinition?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`mangadexSourceSettings`](../modules.md#mangadexsourcesettings) = [`mangadexSourceSettings`](../modules.md#mangadexsourcesettings) |
| `U` | extends [`mangaSourceFetchOption`](../modules.md#mangasourcefetchoption) = [`mangaSourceFetchOption`](../modules.md#mangasourcefetchoption) |
| `V` | extends [`mangaSourceFetchResult`](../modules.md#mangasourcefetchresult) = [`mangaSourceFetchResult`](../modules.md#mangasourcefetchresult) |
| `W` | extends [`chapterSourceFetchOption`](../modules.md#chaptersourcefetchoption) = [`chapterSourceFetchOption`](../modules.md#chaptersourcefetchoption) |
| `X` | extends [`chapterSourceFetchResult`](../modules.md#chaptersourcefetchresult) = [`chapterSourceFetchResult`](../modules.md#chaptersourcefetchresult) |
| `Y` | extends [`pageSourceFetchOption`](../modules.md#pagesourcefetchoption) = [`pageSourceFetchOption`](../modules.md#pagesourcefetchoption) |
| `Z` | extends [`pageSourceFetchResult`](../modules.md#pagesourcefetchresult) = [`pageSourceFetchResult`](../modules.md#pagesourcefetchresult) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingsDefinition` | [`optionDefinition`](../modules.md#optiondefinition)<`T`\> |

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[constructor](AbstractMangaSource.md#constructor)

#### Defined in

[src/MangadexSource.ts:75](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L75)

## Properties

### webInstance

• `Protected` **webInstance**: `AxiosInstance`

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[webInstance](AbstractMangaSource.md#webinstance)

#### Defined in

[src/MangadexSource.ts:73](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L73)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](MangadexSource.md#capturerejectionsymbol)

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[captureRejectionSymbol](AbstractMangaSource.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:322

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[captureRejections](AbstractMangaSource.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[defaultMaxListeners](AbstractMangaSource.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](MangadexSource.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[errorMonitor](AbstractMangaSource.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:321

___

### settingsDefinition

▪ `Static` `Private` **settingsDefinition**: [`optionDefinition`](../modules.md#optiondefinition)<[`mangadexSourceSettings`](../modules.md#mangadexsourcesettings)\>

#### Defined in

[src/MangadexSource.ts:52](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L52)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[addListener](AbstractMangaSource.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:348

___

### createAxiosInstance

▸ `Private` **createAxiosInstance**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/MangadexSource.ts:85](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L85)

___

### downloadFile

▸ **downloadFile**(`uri`, `options?`): `Promise`<{ `data`: `ReadableStream`<`ArrayBuffer`\> ; `type`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `options` | `any` |

#### Returns

`Promise`<{ `data`: `ReadableStream`<`ArrayBuffer`\> ; `type`: `string`  }\>

#### Defined in

[src/MangadexSource.ts:377](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L377)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[emit](AbstractMangaSource.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:610

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[eventNames](AbstractMangaSource.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:673

___

### fetch

▸ **fetch**(`options`): `Promise`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `U` |

#### Returns

`Promise`<`V`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[fetch](AbstractMangaSource.md#fetch)

#### Defined in

node_modules/@medialib/medialib-manga/dist/AbstractMangaSource.d.ts:7

___

### fetchChapterById

▸ **fetchChapterById**(`id`, `options`): `Promise`<`X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `W` |

#### Returns

`Promise`<`X`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchChapterById](AbstractMangaSource.md#fetchchapterbyid)

#### Defined in

[src/MangadexSource.ts:241](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L241)

___

### fetchChapters

▸ **fetchChapters**(`options`): `Promise`<`X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `W` |

#### Returns

`Promise`<`X`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchChapters](AbstractMangaSource.md#fetchchapters)

#### Defined in

[src/MangadexSource.ts:215](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L215)

___

### fetchChaptersByManga

▸ **fetchChaptersByManga**(`manga`, `options`): `Promise`<`X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manga` | [`Manga`](Manga.md)<[`mangaDetails`](../modules.md#mangadetails)\> |
| `options` | `W` |

#### Returns

`Promise`<`X`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchChaptersByManga](AbstractMangaSource.md#fetchchaptersbymanga)

#### Defined in

[src/MangadexSource.ts:193](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L193)

___

### fetchChaptersByMangaId

▸ **fetchChaptersByMangaId**(`id`, `options`): `Promise`<`X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `W` |

#### Returns

`Promise`<`X`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchChaptersByMangaId](AbstractMangaSource.md#fetchchaptersbymangaid)

#### Defined in

[src/MangadexSource.ts:200](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L200)

___

### fetchMangaById

▸ **fetchMangaById**(`id`, `options`): `Promise`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `U` |

#### Returns

`Promise`<`V`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchMangaById](AbstractMangaSource.md#fetchmangabyid)

#### Defined in

[src/MangadexSource.ts:167](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L167)

___

### fetchMangas

▸ **fetchMangas**(`options`): `Promise`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `U` |

#### Returns

`Promise`<`V`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchMangas](AbstractMangaSource.md#fetchmangas)

#### Defined in

[src/MangadexSource.ts:95](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L95)

___

### fetchPagesByChapter

▸ **fetchPagesByChapter**(`chapter`, `options`): `Promise`<`Z`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chapter` | [`Chapter`](Chapter.md)<[`chapterDetails`](../modules.md#chapterdetails)\> |
| `options` | `Y` |

#### Returns

`Promise`<`Z`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchPagesByChapter](AbstractMangaSource.md#fetchpagesbychapter)

#### Defined in

[src/MangadexSource.ts:266](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L266)

___

### fetchPagesByChapterId

▸ **fetchPagesByChapterId**(`id`, `options`): `Promise`<`Z`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `Y` |

#### Returns

`Promise`<`Z`\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[fetchPagesByChapterId](AbstractMangaSource.md#fetchpagesbychapterid)

#### Defined in

[src/MangadexSource.ts:273](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L273)

___

### fetchRawAuthorsByIds

▸ `Private` **fetchRawAuthorsByIds**(`ids?`, `options?`): `Promise`<[`rawAuthor`](../interfaces/rawAuthor.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | `string`[] | `[]` |
| `options` | `any` | `{}` |

#### Returns

`Promise`<[`rawAuthor`](../interfaces/rawAuthor.md)[]\>

#### Defined in

[src/MangadexSource.ts:314](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L314)

___

### fetchRawChaptersByIds

▸ `Private` **fetchRawChaptersByIds**(`ids?`, `options`): `Promise`<[`rawChapter`](../interfaces/rawChapter.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | `string`[] | `[]` |
| `options` | `W` | `undefined` |

#### Returns

`Promise`<[`rawChapter`](../interfaces/rawChapter.md)[]\>

#### Defined in

[src/MangadexSource.ts:350](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L350)

___

### fetchRawMangaVolumesById

▸ `Private` **fetchRawMangaVolumesById**(`id`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/MangadexSource.ts:339](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L339)

___

### getFetchChapterOptionsDefinition

▸ **getFetchChapterOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`W`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`W`\>\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[getFetchChapterOptionsDefinition](AbstractMangaSource.md#getfetchchapteroptionsdefinition)

#### Defined in

[src/MangadexSource.ts:253](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L253)

___

### getFetchMangaOptionsDefinition

▸ **getFetchMangaOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[getFetchMangaOptionsDefinition](AbstractMangaSource.md#getfetchmangaoptionsdefinition)

#### Defined in

[src/MangadexSource.ts:180](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L180)

___

### getFetchOptionsDefinition

▸ **getFetchOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[getFetchOptionsDefinition](AbstractMangaSource.md#getfetchoptionsdefinition)

#### Defined in

node_modules/@medialib/medialib-manga/dist/AbstractMangaSource.d.ts:8

___

### getFetchPageOptionsDefinition

▸ **getFetchPageOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`Y`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`Y`\>\>

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[getFetchPageOptionsDefinition](AbstractMangaSource.md#getfetchpageoptionsdefinition)

#### Defined in

[src/MangadexSource.ts:300](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L300)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](MangadexSource.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[getMaxListeners](AbstractMangaSource.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:525

___

### getSettings

▸ **getSettings**(): `T`

#### Returns

`T`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[getSettings](AbstractMangaSource.md#getsettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSource.d.ts:13

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[getSettingsDefinition](AbstractMangaSource.md#getsettingsdefinition)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSource.d.ts:12

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[listenerCount](AbstractMangaSource.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:619

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[listeners](AbstractMangaSource.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:538

___

### off

▸ **off**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[off](AbstractMangaSource.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:498

___

### on

▸ **on**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[on](AbstractMangaSource.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:380

___

### onSettingsChange

▸ **onSettingsChange**(`_`, `changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`AbstractWebSource`](AbstractWebSource.md)<[`webMediaSourceSettings`](../modules.md#webmediasourcesettings), [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption), [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult)\> |
| `changes` | [`diffType`](../modules.md#difftype) |

#### Returns

`void`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[onSettingsChange](AbstractMangaSource.md#onsettingschange)

#### Defined in

node_modules/@medialib/medialib/dist/source/web/AbstractWebMediaSource.d.ts:11

___

### once

▸ **once**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[once](AbstractMangaSource.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[prependListener](AbstractMangaSource.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:637

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[prependOnceListener](AbstractMangaSource.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:653

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[rawListeners](AbstractMangaSource.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[removeAllListeners](AbstractMangaSource.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:509

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[removeListener](AbstractMangaSource.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### resetWebInstance

▸ **resetWebInstance**(): `void`

#### Returns

`void`

#### Overrides

[AbstractMangaSource](AbstractMangaSource.md).[resetWebInstance](AbstractMangaSource.md#resetwebinstance)

#### Defined in

[src/MangadexSource.ts:81](https://github.com/medialib-project/medialib-manga-source-mangadex/blob/873d461/src/MangadexSource.ts#L81)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`MangadexSource`](MangadexSource.md)<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[setMaxListeners](AbstractMangaSource.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:519

___

### setSettings

▸ **setSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `T` |

#### Returns

`void`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[setSettings](AbstractMangaSource.md#setsettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSource.d.ts:14

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[getEventListeners](AbstractMangaSource.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[listenerCount](AbstractMangaSource.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:268

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[on](AbstractMangaSource.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:250

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[once](AbstractMangaSource.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:189

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[once](AbstractMangaSource.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:190

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[AbstractMangaSource](AbstractMangaSource.md).[setMaxListeners](AbstractMangaSource.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:311
