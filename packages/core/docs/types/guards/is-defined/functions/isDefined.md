[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-defined](../README.md) / isDefined

# Function: isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

Defined in: [types/guards/is-defined.ts:17](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/types/guards/is-defined.ts#L17)

Determines whether a value is neither `undefined` nor `null`.

## Type Parameters

### T

`T`

The type of the value to check.

## Parameters

### value

The value to test for being defined.

`undefined` | `null` | `T`

## Returns

`value is T`

`true` if the value is not `undefined` and not `null`; otherwise, `false`.

## Example

```typescript
const maybeValue: string | undefined = getValue();
if (isDefined(maybeValue)) {
  // maybeValue is now of type string
  console.log(maybeValue.length);
}
```
