[@medialib/medialib-manga-source-mangadex](../README.md) / [Exports](../modules.md) / AbstractMediaSourceAddon

# Class: AbstractMediaSourceAddon<T, U, V, W\>

**`No Inherit Doc`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMediaSource`](AbstractMediaSource.md) = [`AbstractMediaSource`](AbstractMediaSource.md) |
| `U` | extends [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) = [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) |
| `V` | extends [`mediaSourceAddonResources`](../modules.md#mediasourceaddonresources) = [`mediaSourceAddonResources`](../modules.md#mediasourceaddonresources) |
| `W` | extends [`mediaSourceSettings`](../modules.md#mediasourcesettings) = [`mediaSourceSettings`](../modules.md#mediasourcesettings) |

## Hierarchy

- [`AbstractAddon`](AbstractAddon.md)

  ↳ **`AbstractMediaSourceAddon`**

  ↳↳ [`AbstractMangaSourceAddon`](AbstractMangaSourceAddon.md)

## Table of contents

### Constructors

- [constructor](AbstractMediaSourceAddon.md#constructor)

### Properties

- [source](AbstractMediaSourceAddon.md#source)
- [captureRejectionSymbol](AbstractMediaSourceAddon.md#capturerejectionsymbol)
- [captureRejections](AbstractMediaSourceAddon.md#capturerejections)
- [defaultMaxListeners](AbstractMediaSourceAddon.md#defaultmaxlisteners)
- [errorMonitor](AbstractMediaSourceAddon.md#errormonitor)

### Methods

- [addListener](AbstractMediaSourceAddon.md#addlistener)
- [emit](AbstractMediaSourceAddon.md#emit)
- [error](AbstractMediaSourceAddon.md#error)
- [eventNames](AbstractMediaSourceAddon.md#eventnames)
- [getDetails](AbstractMediaSourceAddon.md#getdetails)
- [getMaxListeners](AbstractMediaSourceAddon.md#getmaxlisteners)
- [getResources](AbstractMediaSourceAddon.md#getresources)
- [getSettings](AbstractMediaSourceAddon.md#getsettings)
- [getSettingsDefinition](AbstractMediaSourceAddon.md#getsettingsdefinition)
- [getSource](AbstractMediaSourceAddon.md#getsource)
- [listenerCount](AbstractMediaSourceAddon.md#listenercount)
- [listeners](AbstractMediaSourceAddon.md#listeners)
- [log](AbstractMediaSourceAddon.md#log)
- [off](AbstractMediaSourceAddon.md#off)
- [on](AbstractMediaSourceAddon.md#on)
- [onInstall](AbstractMediaSourceAddon.md#oninstall)
- [onLoad](AbstractMediaSourceAddon.md#onload)
- [onUninstall](AbstractMediaSourceAddon.md#onuninstall)
- [onUnload](AbstractMediaSourceAddon.md#onunload)
- [onUpdate](AbstractMediaSourceAddon.md#onupdate)
- [once](AbstractMediaSourceAddon.md#once)
- [prependListener](AbstractMediaSourceAddon.md#prependlistener)
- [prependOnceListener](AbstractMediaSourceAddon.md#prependoncelistener)
- [rawListeners](AbstractMediaSourceAddon.md#rawlisteners)
- [removeAllListeners](AbstractMediaSourceAddon.md#removealllisteners)
- [removeListener](AbstractMediaSourceAddon.md#removelistener)
- [setMaxListeners](AbstractMediaSourceAddon.md#setmaxlisteners)
- [setSettings](AbstractMediaSourceAddon.md#setsettings)
- [warn](AbstractMediaSourceAddon.md#warn)
- [getEventListeners](AbstractMediaSourceAddon.md#geteventlisteners)
- [listenerCount](AbstractMediaSourceAddon.md#listenercount-1)
- [on](AbstractMediaSourceAddon.md#on-1)
- [once](AbstractMediaSourceAddon.md#once-1)
- [setMaxListeners](AbstractMediaSourceAddon.md#setmaxlisteners-1)

## Constructors

### constructor

• **new AbstractMediaSourceAddon**<`T`, `U`, `V`, `W`\>(`resources`, `details?`, `sourceClass?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMediaSource`](AbstractMediaSource.md)<`Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>, [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult), `T`\> = [`AbstractMediaSource`](AbstractMediaSource.md)<`Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>, [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult)\> |
| `U` | extends [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) = [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) |
| `V` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `W` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `V` |
| `details?` | `U` |
| `sourceClass?` | () => `T` |

#### Overrides

[AbstractAddon](AbstractAddon.md).[constructor](AbstractAddon.md#constructor)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:7

## Properties

### source

• `Private` **source**: `any`

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:6

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](MangadexSource.md#capturerejectionsymbol)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[captureRejectionSymbol](AbstractAddon.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:322

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[AbstractAddon](AbstractAddon.md).[captureRejections](AbstractAddon.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)

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

[AbstractAddon](AbstractAddon.md).[errorMonitor](AbstractAddon.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:321

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[addListener](AbstractAddon.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:348

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

[AbstractAddon](AbstractAddon.md).[emit](AbstractAddon.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:610

___

### error

▸ **error**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[error](AbstractAddon.md#error)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:54

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

[AbstractAddon](AbstractAddon.md).[eventNames](AbstractAddon.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:673

___

### getDetails

▸ **getDetails**(): [`basicAddonDetails`](../modules.md#basicaddondetails)

#### Returns

[`basicAddonDetails`](../modules.md#basicaddondetails)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDetails](AbstractAddon.md#getdetails)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:23

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](AbstractMediaSourceAddon.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getMaxListeners](AbstractAddon.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:525

___

### getResources

▸ **getResources**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getResources](AbstractAddon.md#getresources)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:24

___

### getSettings

▸ **getSettings**(): `W`

#### Returns

`W`

#### Overrides

[AbstractAddon](AbstractAddon.md).[getSettings](AbstractAddon.md#getsettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:9

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`W`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`W`\>

#### Overrides

[AbstractAddon](AbstractAddon.md).[getSettingsDefinition](AbstractAddon.md#getsettingsdefinition)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:11

___

### getSource

▸ **getSource**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:8

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

[AbstractAddon](AbstractAddon.md).[listenerCount](AbstractAddon.md#listenercount)

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

[AbstractAddon](AbstractAddon.md).[listeners](AbstractAddon.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:538

___

### log

▸ **log**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[log](AbstractAddon.md#log)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:52

___

### off

▸ **off**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[off](AbstractAddon.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:498

___

### on

▸ **on**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[on](AbstractAddon.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:380

___

### onInstall

▸ `Abstract` **onInstall**(): `void`

Sould be triggered on the first installation of the addon.

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onInstall](AbstractAddon.md#oninstall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:31

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

Sould be triggered when enabling the addon (most likely the place where you want to do your stuff).

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onLoad](AbstractAddon.md#onload)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:39

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

Should be triggered when uninstalling the addon.

**NO TRACE OF THE ADDON OR RUNNING PROCESS SHOULD BE LEFT**

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUninstall](AbstractAddon.md#onuninstall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:51

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

Should be triggered when disabling the addon.

**YOU SHOULD STOP ANY RUNNING PROCESS AND CANCEL ANY TEMPORARY CHANGES YOUR ADDON MADE**

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUnload](AbstractAddon.md#onunload)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:45

___

### onUpdate

▸ `Abstract` **onUpdate**(`previous`): `void`

Sould be triggered when installing over and replacing a previous version of the addon.

#### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`AbstractAddon`](AbstractAddon.md)<[`basicAddonDetails`](../modules.md#basicaddondetails), `Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>\> |

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUpdate](AbstractAddon.md#onupdate)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:35

___

### once

▸ **once**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[once](AbstractAddon.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[prependListener](AbstractAddon.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:637

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[prependOnceListener](AbstractAddon.md#prependoncelistener)

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

[AbstractAddon](AbstractAddon.md).[rawListeners](AbstractAddon.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeAllListeners](AbstractAddon.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:509

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeListener](AbstractAddon.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[setMaxListeners](AbstractAddon.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:519

___

### setSettings

▸ **setSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `W` |

#### Returns

`void`

#### Overrides

[AbstractAddon](AbstractAddon.md).[setSettings](AbstractAddon.md#setsettings)

#### Defined in

node_modules/@medialib/medialib/dist/source/AbstractMediaSourceAddon.d.ts:10

___

### warn

▸ **warn**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[warn](AbstractAddon.md#warn)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:53

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

[AbstractAddon](AbstractAddon.md).[getEventListeners](AbstractAddon.md#geteventlisteners)

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

[AbstractAddon](AbstractAddon.md).[listenerCount](AbstractAddon.md#listenercount-1)

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

[AbstractAddon](AbstractAddon.md).[on](AbstractAddon.md#on-1)

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

[AbstractAddon](AbstractAddon.md).[once](AbstractAddon.md#once-1)

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

[AbstractAddon](AbstractAddon.md).[once](AbstractAddon.md#once-1)

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

[AbstractAddon](AbstractAddon.md).[setMaxListeners](AbstractAddon.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:311
