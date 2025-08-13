[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / postOrderTraversal

# Function: postOrderTraversal()

> **postOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:38](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/traversal/tree-traversal.ts#L38)

Performs a post-order traversal on a binary tree, invoking a callback for each node's value.

In post-order traversal, the left subtree is visited first, then the right subtree,
and finally the current node.

## Type Parameters

### T

`T`

The type of the value stored in each tree node.

## Parameters

### root

The root node of the binary tree to traverse. If null, nothing is traversed.

`null` | [`ITreeNode`](../../../tree-node/interfaces/ITreeNode.md)\<`T`\>

### callback

(`value`) => `void`

A function to call with the value of each visited node.

## Returns

`void`
