[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`\>(`array`, `key`): `Record`\<`string`, `T`[]\>

Defined in: [arrays/functions/functions.ts:35](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L35)

Groups the elements of an array based on the specified key.

## Type Parameters

### T

`T`

The type of elements in the input array.

## Parameters

### array

`T`[]

The array of objects to group.

### key

keyof `T`

The property name of each object to group by.

## Returns

`Record`\<`string`, `T`[]\>

An object where each key is a stringified value of the specified property,
and the value is an array of objects that share that property value.

## Example

```typescript
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' }
];
const grouped = groupBy(data, 'category');
// grouped = {
//   fruit: [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' }
//   ],
//   vegetable: [
//     { category: 'vegetable', name: 'carrot' }
//   ]
// }
```
