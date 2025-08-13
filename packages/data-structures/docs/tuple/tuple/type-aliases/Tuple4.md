[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [tuple/tuple](../README.md) / Tuple4

# Type Alias: Tuple4\<T1, T2, T3, T4\>

> **Tuple4**\<`T1`, `T2`, `T3`, `T4`\> = `Readonly`\<\[`T1`, `T2`, `T3`, `T4`\]\>

Defined in: [tuple/tuple.ts:52](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/tuple/tuple.ts#L52)

Represents a tuple containing exactly four elements of potentially different types.

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
const tuple: Tuple4<number, string, boolean, Date> = [1, "hello", true, new Date()];
```

## See

[MutableTuple4](MutableTuple4.md) for a mutable version of this tuple.
