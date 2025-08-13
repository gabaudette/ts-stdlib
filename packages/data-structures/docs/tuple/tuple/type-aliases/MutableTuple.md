[**@ts-standard-library/data-structures v1.0.3**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / MutableTuple

# Type Alias: MutableTuple\<T1, T2\>

> **MutableTuple**\<`T1`, `T2`\> = \[`T1`, `T2`\]

Defined in: [tuple/tuple.ts:117](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/data-structures/src/tuple/tuple.ts#L117)

Represents a mutable tuple containing two elements of types `T1` and `T2`.

## Type Parameters

### T1

`T1`

The type of the first element in the tuple.

### T2

`T2`

The type of the second element in the tuple.

## Example

```typescript
let pair: MutableTuple<number, string> = [42, "hello"];
pair[0] = 100; // Allowed, as the tuple is mutable
pair[1] = "world"; // Allowed, as the tuple is mutable
// console.log(pair);
// [100, "world"]
```

## Remarks

The tuple is mutable, allowing for modification of its elements.
This should be used with caution, as it can lead to unexpected side effects.
In general, prefer immutable data structures when possible.

## See

[Tuple](Tuple.md) for an immutable version of this tuple.
