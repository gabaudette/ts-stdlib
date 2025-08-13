[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [tuple/tuple](../README.md) / Tuple6

# Type Alias: Tuple6\<T1, T2, T3, T4, T5, T6\>

> **Tuple6**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\> = `Readonly`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

Defined in: [tuple/tuple.ts:93](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/tuple/tuple.ts#L93)

Represents a tuple with exactly six elements, each potentially of a different type.

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

### T6

`T6`

The type of the sixth element.

## Remarks

The tuple is immutable due to the `Readonly` wrapper.

## Example

```typescript
const tuple: Tuple6<number, string, boolean, Date, null, undefined> = [1, "two", true, new Date(), null, undefined];
```

## See

[MutableTuple6](MutableTuple6.md) for a mutable version of this tuple.
