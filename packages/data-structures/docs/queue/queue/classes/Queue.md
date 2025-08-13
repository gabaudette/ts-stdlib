[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [queue/queue](../README.md) / Queue

# Class: Queue\<T\>

Defined in: queue/queue.ts:29

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

Defined in: queue/queue.ts:39

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

Defined in: queue/queue.ts:52

Removes and returns the item at the front of the queue.

#### Returns

`undefined` \| `T`

The dequeued item of type `T`, or `undefined` if the queue is empty.

***

### peek()

> **peek**(): `undefined` \| `T`

Defined in: queue/queue.ts:61

Returns the element at the front of the queue without removing it.

#### Returns

`undefined` \| `T`

The front element of the queue if it exists; otherwise, `undefined`.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue/queue.ts:70

Determines whether the queue is empty.

#### Returns

`boolean`

`true` if the queue contains no elements; otherwise, `false`.

***

### size()

> **size**(): `number`

Defined in: queue/queue.ts:79

Returns the number of elements currently in the queue.

#### Returns

`number`

The size of the queue.

***

### clear()

> **clear**(): `void`

Defined in: queue/queue.ts:89

Removes all elements from the queue, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the queue will contain no nodes.
