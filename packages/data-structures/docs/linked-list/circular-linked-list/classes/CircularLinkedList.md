[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [linked-list/circular-linked-list](../README.md) / CircularLinkedList

# Class: CircularLinkedList\<T\>

Defined in: [linked-list/circular-linked-list.ts:42](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L42)

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

Defined in: [linked-list/circular-linked-list.ts:46](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L46)

##### Returns

`number`

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [linked-list/circular-linked-list.ts:50](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L50)

#### Returns

`boolean`

***

### add()

> **add**(`value`): `void`

Defined in: [linked-list/circular-linked-list.ts:54](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L54)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### addFirst()

> **addFirst**(`value`): `void`

Defined in: [linked-list/circular-linked-list.ts:67](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L67)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### removeFirst()

> **removeFirst**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:79](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L79)

#### Returns

`undefined` \| `T`

***

### removeLast()

> **removeLast**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:95](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L95)

#### Returns

`undefined` \| `T`

***

### peekFirst()

> **peekFirst**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:117](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L117)

#### Returns

`undefined` \| `T`

***

### peekLast()

> **peekLast**(): `undefined` \| `T`

Defined in: [linked-list/circular-linked-list.ts:121](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L121)

#### Returns

`undefined` \| `T`

***

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Defined in: [linked-list/circular-linked-list.ts:125](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L125)

#### Returns

`IterableIterator`\<`T`\>

***

### clear()

> **clear**(): `void`

Defined in: [linked-list/circular-linked-list.ts:134](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/linked-list/circular-linked-list.ts#L134)

#### Returns

`void`
