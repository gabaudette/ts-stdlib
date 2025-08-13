[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / MutableTuple3

# Type Alias: MutableTuple3\<T1, T2, T3\>

> **MutableTuple3**\<`T1`, `T2`, `T3`\> = \[`T1`, `T2`, `T3`\]

Defined in: [tuple/tuple.ts:141](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/tuple/tuple.ts#L141)

Represents a mutable tuple containing three elements of potentially different types.

## Type Parameters

### T1

`T1`

The type of the first element.

### T2

`T2`

The type of the second element.

### T3

`T3`

The type of the third element. *

## Example

```typescript
let triplet: MutableTuple3<number, string, boolean> = [42, "hello", true];
triplet[0] = 100; // Allowed, as the tuple is mutable
console.log(triplet);
// [100, "hello", true]
```

## Remarks

The tuple is mutable, allowing for modification of its elements.
This should be used with caution, as it can lead to unexpected side effects.
In general, prefer immutable data structures when possible.

## See

[Tuple3](Tuple3.md) for an immutable version of this tuple.
