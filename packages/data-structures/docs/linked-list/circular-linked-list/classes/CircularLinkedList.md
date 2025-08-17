[**@ts-standard-library/data-structures v1.0.4**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [linked-list/circular-linked-list](../README.md) / CircularLinkedList

# Class: CircularLinkedList\<T\>

Defined in: [linked-list/circular-linked-list.ts:42](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L42)

Represents a circular singly linked list data structure.

In a circular linked list, the last node points back to the first node, forming a circle.
This implementation supports efficient addition and removal of elements at both the head and tail.

## Example

```typescript
const list = new CircularLinkedList<number>();
list.add(1);
list.addFirst(0);
for (const value of list) {
  console.log(value); // 0, 1
}
```

## See

 - [CircularLinkedListNode](CircularLinkedListNode.md)
 - [https://en.wikipedia.org/wiki/Circular\_linked\_list](https://en.wikipedia.org/wiki/Circular_linked_list) for more information on circular linked lists.

## Type Parameters

### T

`T`

The type of elements stored in the list.

## Constructors

### Constructor

> **new CircularLinkedList**\<`T`\>(): `CircularLinkedList`\<`T`\>

#### Returns

`CircularLinkedList`\<`T`\>

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [linked-list/circular-linked-list.ts:46](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L46)

##### Returns

`number`

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [linked-list/circular-linked-list.ts:50](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L50)

#### Returns

`boolean`

***

### add()

> **add**(`value`): `void`

Defined in: [linked-list/circular-linked-list.ts:60](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L60)

Adds a new element with the specified value to the circular linked list.
The new node is inserted after the current tail and becomes the new tail.

#### Parameters

##### value

`T`

The value to be added to the list.

#### Returns

`void`

***

### addFirst()

> **addFirst**(`value`): `void`

Defined in: [linked-list/circular-linked-list.ts:82](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L82)

Inserts a new element at the beginning of the circular linked list.

#### Parameters

##### value

`T`

The value to be added as the first element of the list.

If the list is empty, the new node becomes the tail and points to itself.
Otherwise, the new node is inserted immediately after the tail, effectively
becoming the new head of the list.

#### Returns

`void`

***

### removeFirst()

> **removeFirst**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:100](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L100)

Removes and returns the first element (head) from the circular linked list.
If the list is empty, returns `undefined`.

#### Returns

`undefined` \| `T`

The value of the removed head node, or `undefined` if the list is empty.

***

### removeLast()

> **removeLast**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:126](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L126)

Removes and returns the last element from the circular linked list.

If the list is empty, returns `undefined`.
If the list contains only one element, removes it and sets the list to empty.
Otherwise, removes the tail node, updates the tail reference, and returns the removed value.

#### Returns

`undefined` \| `T`

The value of the removed last element, or `undefined` if the list is empty.

***

### peekFirst()

> **peekFirst**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:158](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L158)

Returns the value of the first node in the circular linked list without removing it.
If the list is empty, returns `undefined`.

#### Returns

`undefined` \| `T`

The value of the first node, or `undefined` if the list is empty.

***

### peekLast()

> **peekLast**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:166](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L166)

Returns the value of the last node in the circular linked list without removing it.

#### Returns

`undefined` \| `T`

The value of the last node if the list is not empty; otherwise, `undefined`.

***

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Defined in: [linked-list/circular-linked-list.ts:177](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L177)

Returns an iterator over the elements in the circular linked list.
Iterates starting from the node after the tail and continues until it loops back to the starting node.
If the list is empty, the iterator yields nothing.

#### Returns

`IterableIterator`\<`T`\>

An iterator over the values in the circular linked list.

***

### clear()

> **clear**(): `void`

Defined in: [linked-list/circular-linked-list.ts:193](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/linked-list/circular-linked-list.ts#L193)

Removes all elements from the circular linked list, resetting it to an empty state.
After calling this method, the list will have a size of zero and no nodes.

#### Returns

`void`
