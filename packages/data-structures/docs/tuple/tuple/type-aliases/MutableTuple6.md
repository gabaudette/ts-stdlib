[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [tuple/tuple](../README.md) / MutableTuple6

# Type Alias: MutableTuple6\<T1, T2, T3, T4, T5, T6\>

> **MutableTuple6**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\> = \[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]

Defined in: tuple/tuple.ts:219

Represents a mutable tuple containing six elements of potentially different types.

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

## Example

```typescript
let triplet: MutableTuple3<number, string, boolean, string, number, boolean> = [42, "hello", true, "john", 100, false];
triplet[0] = 100; // Allowed, as the tuple is mutable
console.log(triplet);
// [100, "hello", true, "john", 100, false]
```

## Remarks

The tuple is mutable, allowing for modification of its elements.
This should be used with caution, as it can lead to unexpected side effects.
In general, prefer immutable data structures when possible.

## See

[Tuple6](Tuple6.md) for an immutable version of this tuple.
