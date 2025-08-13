[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / range

# Function: range()

> **range**(`start`, `end`): `number`[]

Defined in: [arrays/functions/functions.ts:131](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L131)

Generates an array of numbers in a specified range.

## Parameters

### start

`number`

The starting number of the range (inclusive).

### end

`number`

The ending number of the range (exclusive).

## Returns

`number`[]

An array containing numbers from `start` up to, but not including, `end`.

## Example

```typescript
range(0, 5); // [0, 1, 2, 3, 4]
range(3, 7); // [3, 4, 5, 6]
```
