[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / inOrderTraversal

# Function: inOrderTraversal()

> **inOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:64](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/traversal/tree-traversal.ts#L64)

Performs an in-order traversal on a binary tree, invoking a callback for each node's value.

In-order traversal visits the left subtree, then the current node, and finally the right subtree.

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

A function to call with the value of each visited node.

## Returns

`void`
