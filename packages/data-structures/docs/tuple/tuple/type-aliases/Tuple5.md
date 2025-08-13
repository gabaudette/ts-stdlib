[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / Tuple5

# Type Alias: Tuple5\<T1, T2, T3, T4, T5\>

> **Tuple5**\<`T1`, `T2`, `T3`, `T4`, `T5`\> = `Readonly`\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

Defined in: [tuple/tuple.ts:71](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/tuple/tuple.ts#L71)

Represents a tuple containing exactly five elements of potentially different types.

## Type Parameters

### T1

`T1`

The type of the first element.

### T2

`T2`

The type of the second element.

### T3

`T3`

The type of the third element.

### T4

`T4`

The type of the fourth element.

### T5

`T5`

The type of the fifth element.

## Example

```typescript
const tuple: Tuple5<number, string, boolean, Date, null> = [1, "two", true, new Date(), null];
```

## See

[MutableTuple5](MutableTuple5.md) for a mutable version of this tuple.
