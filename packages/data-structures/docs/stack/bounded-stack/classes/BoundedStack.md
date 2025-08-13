[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [stack/bounded-stack](../README.md) / BoundedStack

# Class: BoundedStack\<T\>

Defined in: [stack/bounded-stack.ts:52](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/bounded-stack.ts#L52)

A stack data structure with a fixed maximum capacity.

Wraps a standard LIFO (last-in, first-out) stack while enforcing an upper bound
on the number of elements it can contain. Attempts to exceed that bound result
in a thrown error, allowing callers to explicitly handle overflow conditions
instead of silently discarding data.

## Remarks

- The maximum size is validated at construction time.
- Pushing beyond the configured capacity throws an `Error` with the message "Stack overflow".
- This class relies on the base `Stack` implementation for core behavior such as
  storage, iteration, and size querying.

## Examples

```ts
const stack = new BoundedStack<number>(3);
stack.push(10);
stack.push(20);
stack.push(30);
// Next line will throw: Error: "Stack overflow"
stack.push(40);
```

```ts
// Handling overflow gracefully
function safePush<T>(s: BoundedStack<T>, value: T) {
  try {
    s.push(value);
  } catch (e) {
    if (e instanceof Error && e.message === "Stack overflow") {
      // Handle full stack (e.g., log, resize strategy, etc.)
    } else {
      throw e;
    }
  }
}
```

## Throws

Thrown by the constructor if:
- `maxSize <= 0`
- `maxSize > Number.MAX_SAFE_INTEGER`

## Throws

Thrown by `push` if the stack is already at its maximum capacity
(overflow condition).

## Extends

- [`Stack`](../../stack/classes/Stack.md)\<`T`\>

## Type Parameters

### T

`T`

The element type stored in the stack.

## Constructors

### Constructor

> **new BoundedStack**\<`T`\>(`maxSize`, `initialValues?`): `BoundedStack`\<`T`\>

Defined in: [stack/bounded-stack.ts:55](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/bounded-stack.ts#L55)

#### Parameters

##### maxSize

`number`

##### initialValues?

`T`[]

#### Returns

`BoundedStack`\<`T`\>

#### Overrides

[`Stack`](../../stack/classes/Stack.md).[`constructor`](../../stack/classes/Stack.md#constructor)

## Methods

### push()

> **push**(`value`): `void`

Defined in: [stack/bounded-stack.ts:74](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/bounded-stack.ts#L74)

#### Parameters

##### value

`T`

The value to push.

#### Returns

`void`

#### Throws

If the stack is full or exceeds the maximum size.

#### Overrides

[`Stack`](../../stack/classes/Stack.md).[`push`](../../stack/classes/Stack.md#push)

***

### pop()

> **pop**(): `undefined` \| `T`

Defined in: [stack/stack.ts:47](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/stack.ts#L47)

Removes and returns the top element from the stack.

#### Returns

`undefined` \| `T`

The element at the top of the stack, or `undefined` if the stack is empty.

#### Inherited from

[`Stack`](../../stack/classes/Stack.md).[`pop`](../../stack/classes/Stack.md#pop)

***

### peek()

> **peek**(): `undefined` \| `T`

Defined in: [stack/stack.ts:57](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/stack.ts#L57)

Returns the top element of the stack without removing it.
If the stack is empty, returns `undefined`.

#### Returns

`undefined` \| `T`

The top element of the stack, or `undefined` if the stack is empty.

#### Inherited from

[`Stack`](../../stack/classes/Stack.md).[`peek`](../../stack/classes/Stack.md#peek)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [stack/stack.ts:70](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/stack.ts#L70)

Checks whether the stack is empty.

#### Returns

`boolean`

`true` if the stack contains no elements, otherwise `false`.

#### Inherited from

[`Stack`](../../stack/classes/Stack.md).[`isEmpty`](../../stack/classes/Stack.md#isempty)

***

### size()

> **size**(): `number`

Defined in: [stack/stack.ts:79](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/stack.ts#L79)

Returns the number of elements currently in the stack.

#### Returns

`number`

The size of the stack.

#### Inherited from

[`Stack`](../../stack/classes/Stack.md).[`size`](../../stack/classes/Stack.md#size)

***

### clear()

> **clear**(): `void`

Defined in: [stack/stack.ts:89](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/stack/stack.ts#L89)

Removes all elements from the stack, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the stack will contain no elements.

#### Inherited from

[`Stack`](../../stack/classes/Stack.md).[`clear`](../../stack/classes/Stack.md#clear)
