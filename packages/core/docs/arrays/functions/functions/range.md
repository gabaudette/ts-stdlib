[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / range

# Function: range()

> **range**(`start`, `end`): `number`[]

Defined in: arrays/functions.ts:133

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
