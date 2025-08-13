[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [stack/stack](../README.md) / Stack

# Class: Stack\<T\>

Defined in: [stack/stack.ts:17](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L17)

Represents a generic stack data structure, supporting typical stack operations such as push, pop, peek, and clear.

## Example

```typescript
const stack = new Stack<number>([1, 2, 3]);
stack.push(4);
const top = stack.peek(); // 4
const popped = stack.pop(); // 4
```

## See

 - [https://en.wikipedia.org/wiki/Stack\_(abstract\_data\_type)](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) for more information on stacks.
 - BoundedStack for a bounded stack implementation.

## Extended by

- [`BoundedStack`](../../bounded-stack/classes/BoundedStack.md)

## Type Parameters

### T

`T`

The type of elements stored in the stack.

## Constructors

### Constructor

> **new Stack**\<`T`\>(`initialValues?`): `Stack`\<`T`\>

Defined in: [stack/stack.ts:20](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L20)

#### Parameters

##### initialValues?

`T`[]

#### Returns

`Stack`\<`T`\>

## Methods

### push()

> **push**(`value`): `void`

Defined in: [stack/stack.ts:34](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L34)

Adds a value to the top of the stack.

#### Parameters

##### value

`T`

The value to be pushed onto the stack.

#### Returns

`void`

#### Throws

If the stack size exceeds `Number.MAX_SAFE_INTEGER (9007199254740991 2^53 − 1.)`.

***

### pop()

> **pop**(): `undefined` \| `T`

Defined in: [stack/stack.ts:47](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L47)

Removes and returns the top element from the stack.

#### Returns

`undefined` \| `T`

The element at the top of the stack, or `undefined` if the stack is empty.

***

### peek()

> **peek**(): `undefined` \| `T`

Defined in: [stack/stack.ts:57](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L57)

Returns the top element of the stack without removing it.
If the stack is empty, returns `undefined`.

#### Returns

`undefined` \| `T`

The top element of the stack, or `undefined` if the stack is empty.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [stack/stack.ts:70](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L70)

Checks whether the stack is empty.

#### Returns

`boolean`

`true` if the stack contains no elements, otherwise `false`.

***

### size()

> **size**(): `number`

Defined in: [stack/stack.ts:79](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L79)

Returns the number of elements currently in the stack.

#### Returns

`number`

The size of the stack.

***

### clear()

> **clear**(): `void`

Defined in: [stack/stack.ts:89](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/stack/stack.ts#L89)

Removes all elements from the stack, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the stack will contain no elements.
