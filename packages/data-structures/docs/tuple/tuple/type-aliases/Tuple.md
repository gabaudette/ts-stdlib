[**@ts-standard-library/data-structures v1.0.3**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [tuple/tuple](../README.md) / Tuple

# Type Alias: Tuple\<T1, T2\>

> **Tuple**\<`T1`, `T2`\> = `Readonly`\<\[`T1`, `T2`\]\>

Defined in: [tuple/tuple.ts:18](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/data-structures/src/tuple/tuple.ts#L18)

Represents a tuple containing two elements of potentially different types.

## Type Parameters

### T1

`T1`

The type of the first element in the tuple.

### T2

`T2`

The type of the second element in the tuple.

## Remarks

The tuple is immutable due to the `Readonly` wrapper.

## Example

```typescript
const pair: Tuple<number, string> = [42, "answer"];
```

## See

[MutableTuple](MutableTuple.md) for a mutable version of this tuple.
