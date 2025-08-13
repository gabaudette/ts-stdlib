[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [linked-list/single-linked-list](../README.md) / SingleLinkedList

# Class: SingleLinkedList\<T\>

Defined in: [linked-list/single-linked-list.ts:28](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L28)

Represents a singly linked list data structure.

## Example

```typescript
const list = new SingleLinkedList<number>();
list.append(1);
list.prepend(0);
list.delete(1);
```

## Remarks

- Supports efficient append and prepend operations.
- Maintains references to both head and tail nodes.
- Provides methods for searching, deleting, and checking list properties.

## See

 - [Node](../interfaces/Node.md) for the structure of each node in the list.
 - [https://en.wikipedia.org/wiki/Linked\_list#Singly\_linked\_lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists) for more information on singly linked lists.

## Type Parameters

### T

`T`

The type of elements stored in the list.

## Constructors

### Constructor

> **new SingleLinkedList**\<`T`\>(): `SingleLinkedList`\<`T`\>

#### Returns

`SingleLinkedList`\<`T`\>

## Methods

### append()

> **append**(`value`): `void`

Defined in: [linked-list/single-linked-list.ts:47](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L47)

Appends a new node with the specified value to the end of the linked list.

#### Parameters

##### value

`T`

The value to be added to the list.

#### Returns

`void`

#### Remarks

If the list is empty, the new node becomes both the head and the tail.
Otherwise, the new node is added after the current tail, and the tail reference is updated.
The length of the list is incremented after the operation.

***

### prepend()

> **prepend**(`value`): `void`

Defined in: [linked-list/single-linked-list.ts:70](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L70)

Inserts a new node with the specified value at the beginning of the linked list.

If the list is empty, the new node becomes both the head and the tail.
Otherwise, the new node is set as the new head, and its `next` pointer references the previous head.

#### Parameters

##### value

`T`

The value to be stored in the new node.

#### Returns

`void`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: [linked-list/single-linked-list.ts:94](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L94)

Deletes the first node in the linked list that contains the specified value.

#### Parameters

##### value

`T`

The value to delete from the list.

#### Returns

`boolean`

`true` if a node was deleted; otherwise, `false`.

#### Remarks

If the list is empty or the value is not found, the method returns `false`.
If the deleted node is the head or tail, the corresponding pointer is updated.
The length of the list is decremented when a node is deleted.

***

### find()

> **find**(`value`): `null` \| [`Node`](../interfaces/Node.md)\<`T`\>

Defined in: [linked-list/single-linked-list.ts:130](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L130)

Searches for the first node in the linked list that contains the specified value.

#### Parameters

##### value

`T`

The value to search for in the list.

#### Returns

`null` \| [`Node`](../interfaces/Node.md)\<`T`\>

The first node containing the value, or `null` if no such node exists.

***

### getSize()

> **getSize**(): `number`

Defined in: [linked-list/single-linked-list.ts:146](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L146)

Returns the number of elements in the linked list.

#### Returns

`number`

The current size of the linked list.

***

### getTail()

> **getTail**(): `null` \| [`Node`](../interfaces/Node.md)\<`T`\>

Defined in: [linked-list/single-linked-list.ts:155](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L155)

Returns the tail node of the linked list.

#### Returns

`null` \| [`Node`](../interfaces/Node.md)\<`T`\>

The last node in the list, or `null` if the list is empty.

***

### getHead()

> **getHead**(): `null` \| [`Node`](../interfaces/Node.md)\<`T`\>

Defined in: [linked-list/single-linked-list.ts:164](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L164)

Returns the head node of the linked list.

#### Returns

`null` \| [`Node`](../interfaces/Node.md)\<`T`\>

The first node in the list, or `null` if the list is empty.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [linked-list/single-linked-list.ts:173](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/single-linked-list.ts#L173)

Determines whether the linked list is empty.

#### Returns

`boolean`

`true` if the list contains no elements, otherwise `false`.
