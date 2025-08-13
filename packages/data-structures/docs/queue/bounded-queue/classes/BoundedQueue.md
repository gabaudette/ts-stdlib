[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [queue/bounded-queue](../README.md) / BoundedQueue

# Class: BoundedQueue\<T\>

Defined in: queue/bounded-queue.ts:13

A queue data structure with a fixed maximum size.

The `BoundedQueue` extends the standard `Queue` and adds a limit to the number of items
it can hold. Attempting to enqueue an item when the queue is full will throw an error.

## See

[Queue](../../queue/classes/Queue.md) for the base Queue implementation.

## Extends

- [`Queue`](../../queue/classes/Queue.md)\<`T`\>

## Type Parameters

### T

`T`

The type of elements held in the queue.

## Constructors

### Constructor

> **new BoundedQueue**\<`T`\>(`maxSize`): `BoundedQueue`\<`T`\>

Defined in: queue/bounded-queue.ts:16

#### Parameters

##### maxSize

`number`

#### Returns

`BoundedQueue`\<`T`\>

#### Overrides

[`Queue`](../../queue/classes/Queue.md).[`constructor`](../../queue/classes/Queue.md#constructor)

## Methods

### enqueue()

> **enqueue**(`item`): `T`

Defined in: queue/bounded-queue.ts:29

Adds an item to the queue.
Throws an error if the queue has reached its maximum size.

#### Parameters

##### item

`T`

The item to enqueue.

#### Returns

`T`

The enqueued item.

#### Throws

If the queue is full.

#### Overrides

[`Queue`](../../queue/classes/Queue.md).[`enqueue`](../../queue/classes/Queue.md#enqueue)

***

### dequeue()

> **dequeue**(): `undefined` \| `T`

Defined in: queue/queue.ts:52

Removes and returns the item at the front of the queue.

#### Returns

`undefined` \| `T`

The dequeued item of type `T`, or `undefined` if the queue is empty.

#### Inherited from

[`Queue`](../../queue/classes/Queue.md).[`dequeue`](../../queue/classes/Queue.md#dequeue)

***

### peek()

> **peek**(): `undefined` \| `T`

Defined in: queue/queue.ts:61

Returns the element at the front of the queue without removing it.

#### Returns

`undefined` \| `T`

The front element of the queue if it exists; otherwise, `undefined`.

#### Inherited from

[`Queue`](../../queue/classes/Queue.md).[`peek`](../../queue/classes/Queue.md#peek)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue/queue.ts:70

Determines whether the queue is empty.

#### Returns

`boolean`

`true` if the queue contains no elements; otherwise, `false`.

#### Inherited from

[`Queue`](../../queue/classes/Queue.md).[`isEmpty`](../../queue/classes/Queue.md#isempty)

***

### size()

> **size**(): `number`

Defined in: queue/queue.ts:79

Returns the number of elements currently in the queue.

#### Returns

`number`

The size of the queue.

#### Inherited from

[`Queue`](../../queue/classes/Queue.md).[`size`](../../queue/classes/Queue.md#size)

***

### clear()

> **clear**(): `void`

Defined in: queue/queue.ts:89

Removes all elements from the queue, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the queue will contain no nodes.

#### Inherited from

[`Queue`](../../queue/classes/Queue.md).[`clear`](../../queue/classes/Queue.md#clear)
