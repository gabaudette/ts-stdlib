[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [tuple/tuple](../README.md) / Tuple3

# Type Alias: Tuple3\<T1, T2, T3\>

> **Tuple3**\<`T1`, `T2`, `T3`\> = `Readonly`\<\[`T1`, `T2`, `T3`\]\>

Defined in: [tuple/tuple.ts:34](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/tuple/tuple.ts#L34)

Represents a read-only tuple containing exactly three elements of potentially different types.

## Type Parameters

### T1

`T1`

The type of the first element in the tuple.

### T2

`T2`

The type of the second element in the tuple.

### T3

`T3`

The type of the third element in the tuple.

## Example

```typescript
const point: Tuple3<number, number, number> = [1, 2, 3] as const;
```

## See

[MutableTuple3](MutableTuple3.md) for a mutable version of this tuple.
