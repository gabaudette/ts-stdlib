[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [trees/traversal/tree-traversal](../README.md) / reversePostOrderTraversal

# Function: reversePostOrderTraversal()

> **reversePostOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:118](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/traversal/tree-traversal.ts#L118)

Traverses a binary tree in reverse post-order (right, left, root) and invokes a callback for each node's value.

## Type Parameters

### T

`T`

The type of the value stored in each tree node.

## Parameters

### root

The root node of the tree to traverse. If `null`, traversal does nothing.

`null` | [`ITreeNode`](../../../tree-node/interfaces/ITreeNode.md)\<`T`\>

### callback

(`value`) => `void`

A function to call with the value of each visited node.

## Returns

`void`

## Remarks

This traversal visits the right subtree first, then the left subtree, and finally the current node.
