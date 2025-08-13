[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [trees/traversal/tree-traversal](../README.md) / reversePreOrderTraversal

# Function: reversePreOrderTraversal()

> **reversePreOrderTraversal**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:92](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/trees/traversal/tree-traversal.ts#L92)

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
