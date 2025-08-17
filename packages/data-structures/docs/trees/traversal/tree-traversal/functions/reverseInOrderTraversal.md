[**@ts-standard-library/data-structures v1.0.6**](../../../../README.md)

***

[@ts-standard-library/data-structures](../../../../modules.md) / [trees/traversal/tree-traversal](../README.md) / reverseInOrderTraversal

# Function: reverseInOrderTraversal()

> **reverseInOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:150](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/traversal/tree-traversal.ts#L150)

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
