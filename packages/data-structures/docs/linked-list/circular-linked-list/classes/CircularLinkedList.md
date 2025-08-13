[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [linked-list/circular-linked-list](../README.md) / CircularLinkedList

# Class: CircularLinkedList\<T\>

Defined in: linked-list/circular-linked-list.ts:42

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

Defined in: linked-list/circular-linked-list.ts:46

##### Returns

`number`

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: linked-list/circular-linked-list.ts:50

#### Returns

`boolean`

***

### add()

> **add**(`value`): `void`

Defined in: linked-list/circular-linked-list.ts:54

#### Parameters

##### value

`T`

#### Returns

`void`

***

### addFirst()

> **addFirst**(`value`): `void`

Defined in: linked-list/circular-linked-list.ts:67

#### Parameters

##### value

`T`

#### Returns

`void`

***

### removeFirst()

> **removeFirst**(): `undefined` \| `T`

Defined in: linked-list/circular-linked-list.ts:79

#### Returns

`undefined` \| `T`

***

### removeLast()

> **removeLast**(): `undefined` \| `T`

Defined in: linked-list/circular-linked-list.ts:95

#### Returns

`undefined` \| `T`

***

### peekFirst()

> **peekFirst**(): `undefined` \| `T`

Defined in: linked-list/circular-linked-list.ts:117

#### Returns

`undefined` \| `T`

***

### peekLast()

> **peekLast**(): `undefined` \| `T`

Defined in: linked-list/circular-linked-list.ts:121

#### Returns

`undefined` \| `T`

***

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Defined in: linked-list/circular-linked-list.ts:125

#### Returns

`IterableIterator`\<`T`\>

***

### clear()

> **clear**(): `void`

Defined in: linked-list/circular-linked-list.ts:134

#### Returns

`void`
