[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [linked-list/double-linked-list](../README.md) / DoubleLinkedListNode

# Class: DoubleLinkedListNode\<T\>

Defined in: linked-list/double-linked-list.ts:10

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

Defined in: linked-list/double-linked-list.ts:15

#### Parameters

##### value

`T`

#### Returns

`DoubleLinkedListNode`\<`T`\>

## Properties

### value

> **value**: `T`

Defined in: linked-list/double-linked-list.ts:11

The value contained in the node.

***

### next

> **next**: `null` \| `DoubleLinkedListNode`\<`T`\> = `null`

Defined in: linked-list/double-linked-list.ts:12

Reference to the next node in the list, or `null` if this is the last node.

***

### prev

> **prev**: `null` \| `DoubleLinkedListNode`\<`T`\> = `null`

Defined in: linked-list/double-linked-list.ts:13

Reference to the previous node in the list, or `null` if this is the first node.
