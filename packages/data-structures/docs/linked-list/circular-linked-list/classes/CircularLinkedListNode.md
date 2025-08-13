[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [linked-list/circular-linked-list](../README.md) / CircularLinkedListNode

# Class: CircularLinkedListNode\<T\>

Defined in: [linked-list/circular-linked-list.ts:11](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/linked-list/circular-linked-list.ts#L11)

Represents a node in a circular singly linked list.

## Type Parameters

### T

`T`

The type of the value stored in the node.

Each node contains a value and a reference to the next node in the list.
In a circular linked list, the last node points back to itself or to the head node,
forming a closed loop.

## Constructors

### Constructor

> **new CircularLinkedListNode**\<`T`\>(`value`): `CircularLinkedListNode`\<`T`\>

Defined in: [linked-list/circular-linked-list.ts:15](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/linked-list/circular-linked-list.ts#L15)

#### Parameters

##### value

`T`

#### Returns

`CircularLinkedListNode`\<`T`\>

## Properties

### value

> **value**: `T`

Defined in: [linked-list/circular-linked-list.ts:12](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/linked-list/circular-linked-list.ts#L12)

***

### next

> **next**: `CircularLinkedListNode`\<`T`\>

Defined in: [linked-list/circular-linked-list.ts:13](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/linked-list/circular-linked-list.ts#L13)
