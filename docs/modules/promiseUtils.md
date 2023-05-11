[@medialib/medialib-manga-source-mangadex](../README.md) / [Exports](../modules.md) / promiseUtils

# Namespace: promiseUtils

## Table of contents

### Functions

- [chainPromisesOnArray](promiseUtils.md#chainpromisesonarray)

## Functions

### chainPromisesOnArray

▸ **chainPromisesOnArray**<`T`, `V`\>(`array`, `promise`, `initialValue`): `V`

Execute the promises one after the other and reduce what they return.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `promise` | (`element`: `T`, `results`: `V`, `index`: `number`) => `Promise`<`V`\> |
| `initialValue` | `V` |

#### Returns

`V`

#### Defined in

node_modules/@medialib/medialib/dist/utils/promiseUtils.d.ts:9
