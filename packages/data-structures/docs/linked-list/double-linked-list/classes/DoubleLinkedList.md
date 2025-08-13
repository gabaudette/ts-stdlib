[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [linked-list/double-linked-list](../README.md) / DoubleLinkedList

# Class: DoubleLinkedList\<T\>

Defined in: [linked-list/double-linked-list.ts:42](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L42)

Represents a generic double linked list data structure.

## Remarks

This class provides efficient insertion and removal of elements at both ends of the list.
It maintains references to both the head and tail nodes, allowing bidirectional traversal.

## Example

```typescript
const list = new DoubleLinkedList<number>();
list.push(1);
list.push(2);
list.push(3);
for (const value of list) {
  console.log(value); // 1, 2, 3
}
```

## See

 - [DoubleLinkedListNode](DoubleLinkedListNode.md) for the structure of each node in the list.
 - [https://en.wikipedia.org/wiki/Doubly\_linked\_list](https://en.wikipedia.org/wiki/Doubly_linked_list) for more information on double linked lists.

## Type Parameters

### T

`T`

The type of elements stored in the list.

## Constructors

### Constructor

> **new DoubleLinkedList**\<`T`\>(): `DoubleLinkedList`\<`T`\>

#### Returns

`DoubleLinkedList`\<`T`\>

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [linked-list/double-linked-list.ts:117](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L117)

Gets the number of elements in the double linked list.

##### Returns

`number`

The current length of the list.

***

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

Defined in: [linked-list/double-linked-list.ts:125](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L125)

Indicates whether the linked list contains no elements.

##### Returns

`boolean`

`true` if the list is empty; otherwise, `false`.

***

### headNode

#### Get Signature

> **get** **headNode**(): `null` \| [`DoubleLinkedListNode`](DoubleLinkedListNode.md)\<`T`\>

Defined in: [linked-list/double-linked-list.ts:133](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L133)

Gets the head (first) node of the double linked list.

##### Returns

`null` \| [`DoubleLinkedListNode`](DoubleLinkedListNode.md)\<`T`\>

The head node if the list is not empty; otherwise, `null`.

***

### tailNode

#### Get Signature

> **get** **tailNode**(): `null` \| [`DoubleLinkedListNode`](DoubleLinkedListNode.md)\<`T`\>

Defined in: [linked-list/double-linked-list.ts:141](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L141)

Gets the tail (last) node of the double linked list.

##### Returns

`null` \| [`DoubleLinkedListNode`](DoubleLinkedListNode.md)\<`T`\>

The last node in the list, or `null` if the list is empty.

## Methods

### push()

> **push**(`value`): `void`

Defined in: [linked-list/double-linked-list.ts:57](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L57)

Adds a new element with the specified value to the end of the double linked list.

#### Parameters

##### value

`T`

The value to be added to the list.

#### Returns

`void`

#### Remarks

If the list is empty, the new node becomes both the head and tail.
Otherwise, the new node is appended after the current tail.
The length of the list is incremented.

***

### pop()

> **pop**(): `undefined` \| `T`

Defined in: [linked-list/double-linked-list.ts:75](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L75)

Removes and returns the value from the end (tail) of the double linked list.
If the list is empty, returns `undefined`.

#### Returns

`undefined` \| `T`

The value of the removed tail node, or `undefined` if the list is empty.

***

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Defined in: [linked-list/double-linked-list.ts:96](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L96)

Returns an iterator that yields each value in the double linked list in order from head to tail.

#### Returns

`IterableIterator`\<`T`\>

An iterator over the values in the list.

***

### clear()

> **clear**(): `void`

Defined in: [linked-list/double-linked-list.ts:108](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/double-linked-list.ts#L108)

Removes all nodes from the linked list, resetting its state.
After calling this method, the list will be empty and its length will be zero.

#### Returns

`void`
