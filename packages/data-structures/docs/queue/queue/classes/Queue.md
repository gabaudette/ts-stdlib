[**@ts-standard-library/data-structures v1.0.6**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [queue/queue](../README.md) / Queue

# Class: Queue\<T\>

Defined in: [queue/queue.ts:29](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L29)

Represents a generic queue data structure, supporting FIFO (first-in, first-out) operations.

## Example

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
```

## Extended by

- [`BoundedQueue`](../../bounded-queue/classes/BoundedQueue.md)

## Type Parameters

### T

`T`

The type of elements stored in the queue.

## Constructors

### Constructor

> **new Queue**\<`T`\>(): `Queue`\<`T`\>

#### Returns

`Queue`\<`T`\>

## Methods

### enqueue()

> **enqueue**(`item`): `T`

Defined in: [queue/queue.ts:39](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L39)

Adds an item to the end of the queue.

#### Parameters

##### item

`T`

The item to enqueue.

#### Returns

`T`

The enqueued item.

#### Throws

If the queue exceeds the maximum safe integer length.

***

### dequeue()

> **dequeue**(): `undefined` \| `T`

Defined in: [queue/queue.ts:54](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L54)

Removes and returns the item at the front of the queue.

#### Returns

`undefined` \| `T`

The dequeued item of type `T`, or `undefined` if the queue is empty.

***

### peek()

> **peek**(): `undefined` \| `T`

Defined in: [queue/queue.ts:63](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L63)

Returns the element at the front of the queue without removing it.

#### Returns

`undefined` \| `T`

The front element of the queue if it exists; otherwise, `undefined`.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [queue/queue.ts:72](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L72)

Determines whether the queue is empty.

#### Returns

`boolean`

`true` if the queue contains no elements; otherwise, `false`.

***

### size()

> **size**(): `number`

Defined in: [queue/queue.ts:81](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L81)

Returns the number of elements currently in the queue.

#### Returns

`number`

The size of the queue.

***

### clear()

> **clear**(): `void`

Defined in: [queue/queue.ts:91](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/queue/queue.ts#L91)

Removes all elements from the queue, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the queue will contain no nodes.
