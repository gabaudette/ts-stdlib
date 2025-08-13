[**@ts-stdlib/algorithms v0.1.0**](../../../../README.md)

***

[@ts-stdlib/algorithms](../../../../README.md) / [trees/traversal/tree-traversal](../README.md) / reverseInOrderTraversal

# Function: reverseInOrderTraversal()

> **reverseInOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: trees/traversal/tree-traversal.ts:145

Performs a reverse in-order traversal (right, root, left) on a binary tree.

## Type Parameters

### T

`T`

The type of the value stored in each tree node.

## Parameters

### root

The root node of the binary tree to traverse. If `null`, the traversal does nothing.

`null` | [`ITreeNode`](../../../tree-node/interfaces/ITreeNode.md)\<`T`\>

### callback

(`value`) => `void`

A function to be called with the value of each visited node.

## Returns

`void`

## Remarks

Reverse in-order traversal visits nodes in descending order for a binary search tree.
