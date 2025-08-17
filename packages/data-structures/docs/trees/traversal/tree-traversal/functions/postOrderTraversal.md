[**@ts-standard-library/data-structures v1.0.5**](../../../../README.md)

***

[@ts-standard-library/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / postOrderTraversal

# Function: postOrderTraversal()

> **postOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:39](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/traversal/tree-traversal.ts#L39)

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
