[**@ts-standard-library/data-structures v1.0.6**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / MutableTuple4

# Type Alias: MutableTuple4\<T1, T2, T3, T4\>

> **MutableTuple4**\<`T1`, `T2`, `T3`, `T4`\> = \[`T1`, `T2`, `T3`, `T4`\]

Defined in: [tuple/tuple.ts:166](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/tuple/tuple.ts#L166)

Represents a mutable tuple containing four elements of potentially different types.

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

## Example

```typescript
let triplet: MutableTuple3<number, string, boolean, string> = [42, "hello", true, "john"];
triplet[0] = 100; // Allowed, as the tuple is mutable
console.log(triplet);
// [100, "hello", true, "john"]
```

## Remarks

The tuple is mutable, allowing for modification of its elements.
This should be used with caution, as it can lead to unexpected side effects.
In general, prefer immutable data structures when possible.

## See

[Tuple4](Tuple4.md) for an immutable version of this tuple.
