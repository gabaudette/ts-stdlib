[**@ts-standard-library/data-structures v1.0.3**](../../../../README.md)

***

[@ts-standard-library/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / reversePreOrderTraversal

# Function: reversePreOrderTraversal()

> **reversePreOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:95](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/data-structures/src/trees/traversal/tree-traversal.ts#L95)

Performs a reverse pre-order traversal (right, root, left) on a binary tree.

## Type Parameters

### T

`T`

The type of the value stored in each tree node.

## Parameters

### root

The root node of the tree to traverse. If `null`, the traversal does nothing.

`null` | [`ITreeNode`](../../../tree-node/interfaces/ITreeNode.md)\<`T`\>

### callback

(`value`) => `void`

A function to call with the value of each visited node.

## Returns

`void`

## Remarks

In reverse pre-order traversal, the right subtree is visited first, then the current node,
and finally the left subtree. This is the opposite order of the standard pre-order traversal.
