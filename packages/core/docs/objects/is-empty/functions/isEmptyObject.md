[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/is-empty](../README.md) / isEmptyObject

# Function: isEmptyObject()

> **isEmptyObject**(`obj`): `boolean`

Defined in: [objects/is-empty.ts:14](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/objects/is-empty.ts#L14)

Determines whether the provided object has no own enumerable properties.

## Parameters

### obj

`Record`\<`string`, `unknown`\>

The object to check for emptiness.

## Returns

`boolean`

`true` if the object has no own enumerable properties, otherwise `false`.

## Example

```ts
const obj = {};
console.log(isEmptyObject(obj)); // true

const obj2 = { a: 1 };
console.log(isEmptyObject(obj2)); // false
```
