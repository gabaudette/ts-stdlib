[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [trees/tree-node](../README.md) / ITreeNode

# Interface: ITreeNode\<T\>

Defined in: trees/tree-node.ts:11

Represents a node in a binary tree structure.

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Properties

### value

> **value**: `T`

Defined in: trees/tree-node.ts:12

The value stored in the node.

***

### left

> **left**: `null` \| `ITreeNode`\<`T`\>

Defined in: trees/tree-node.ts:13

Reference to the left child node, or `null` if none.

***

### right

> **right**: `null` \| `ITreeNode`\<`T`\>

Defined in: trees/tree-node.ts:14

Reference to the right child node, or `null` if none.
