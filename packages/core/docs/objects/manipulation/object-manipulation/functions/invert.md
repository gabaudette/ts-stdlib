[**@ts-standard-library/core v1.0.2**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / invert

# Function: invert()

> **invert**\<`T`\>(`obj`): \{ \[V in string \| number \| symbol\]: \{ \[K in string \| number \| symbol\]: T\[K\] extends V ? K : never \}\[keyof T\] \}

Defined in: [objects/manipulation/object-manipulation.ts:139](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/objects/manipulation/object-manipulation.ts#L139)

Inverts the keys and values of an object. The returned object maps each value of the original object
(that is a string, number, or symbol) to its corresponding key. If multiple keys share the same value,
only one of them will be preserved in the result.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

## Parameters

### obj

`T`

The object whose keys and values are to be inverted.

## Returns

\{ \[V in string \| number \| symbol\]: \{ \[K in string \| number \| symbol\]: T\[K\] extends V ? K : never \}\[keyof T\] \}

An object where the keys are the values of the input object and the values are the corresponding keys.

## Example

```typescript
const obj = { a: 1, b: 2, c: 1 };
const inverted = invert(obj);
// inverted: { 1: 'c', 2: 'b' }
```
