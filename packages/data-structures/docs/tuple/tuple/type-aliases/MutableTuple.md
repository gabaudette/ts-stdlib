[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [tuple/tuple](../README.md) / MutableTuple

# Type Alias: MutableTuple\<T1, T2\>

> **MutableTuple**\<`T1`, `T2`\> = \[`T1`, `T2`\]

Defined in: [tuple/tuple.ts:117](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/tuple/tuple.ts#L117)

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
