[**@ts-standard-library/data-structures v1.0.5**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / MutableTuple5

# Type Alias: MutableTuple5\<T1, T2, T3, T4, T5\>

> **MutableTuple5**\<`T1`, `T2`, `T3`, `T4`, `T5`\> = \[`T1`, `T2`, `T3`, `T4`, `T5`\]

Defined in: [tuple/tuple.ts:192](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/tuple/tuple.ts#L192)

Represents a mutable tuple containing five elements of potentially different types.

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
let triplet: MutableTuple3<number, string, boolean, string, number> = [42, "hello", true, "john", 100];
triplet[0] = 100; // Allowed, as the tuple is mutable
console.log(triplet);
// [100, "hello", true, "john", 100]
```

## Remarks

The tuple is mutable, allowing for modification of its elements.
This should be used with caution, as it can lead to unexpected side effects.
In general, prefer immutable data structures when possible.

## See

[Tuple5](Tuple5.md) for an immutable version of this tuple.
