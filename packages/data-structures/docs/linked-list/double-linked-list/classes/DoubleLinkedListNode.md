[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [linked-list/double-linked-list](../README.md) / DoubleLinkedListNode

# Class: DoubleLinkedListNode\<T\>

Defined in: [linked-list/double-linked-list.ts:10](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/linked-list/double-linked-list.ts#L10)

Represents a node in a double linked list.

## Param

The value to store in the node

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Constructors

### Constructor

> **new DoubleLinkedListNode**\<`T`\>(`value`): `DoubleLinkedListNode`\<`T`\>

Defined in: [linked-list/double-linked-list.ts:15](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/linked-list/double-linked-list.ts#L15)

#### Parameters

##### value

`T`

#### Returns

`DoubleLinkedListNode`\<`T`\>

## Properties

### value

> **value**: `T`

Defined in: [linked-list/double-linked-list.ts:11](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/linked-list/double-linked-list.ts#L11)

The value contained in the node.

***

### next

> **next**: `null` \| `DoubleLinkedListNode`\<`T`\> = `null`

Defined in: [linked-list/double-linked-list.ts:12](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/linked-list/double-linked-list.ts#L12)

Reference to the next node in the list, or `null` if this is the last node.

***

### prev

> **prev**: `null` \| `DoubleLinkedListNode`\<`T`\> = `null`

Defined in: [linked-list/double-linked-list.ts:13](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/linked-list/double-linked-list.ts#L13)

Reference to the previous node in the list, or `null` if this is the first node.
