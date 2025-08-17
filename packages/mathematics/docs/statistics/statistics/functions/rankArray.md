[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / rankArray

# Function: rankArray()

> **rankArray**(`arr`): `number`[]

Defined in: [statistics/statistics.ts:830](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L830)

Returns the ranks of the elements in the input array.
The smallest value receives rank 1, the next smallest rank 2, and so on.
If there are duplicate values, each occurrence receives the rank of its first appearance in the sorted array.

## Parameters

### arr

`number`[]

The array of numbers to rank.

## Returns

`number`[]

An array of ranks corresponding to the input array.

## Example

```typescript
rankArray([30, 10, 20]); // returns [3, 1, 2]
```
