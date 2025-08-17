[**@ts-standard-library/data-structures v1.0.7**](../../../../README.md)

***

[@ts-standard-library/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / reversePostOrderTraversal

# Function: reversePostOrderTraversal()

> **reversePostOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:122](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/data-structures/src/trees/traversal/tree-traversal.ts#L122)

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
