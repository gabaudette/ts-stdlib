[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [trees/traversal/tree-traversal](../README.md) / bfs

# Function: bfs()

> **bfs**\<`T`\>(`root`, `callback`): `void`

Defined in: [trees/traversal/tree-traversal.ts:171](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/traversal/tree-traversal.ts#L171)

Performs a breadth-first search (BFS) traversal on a binary tree.

## Type Parameters

### T

`T`

The type of the value stored in each tree node.

## Parameters

### root

The root node of the binary tree to traverse. If `null`, the function does nothing.

`null` | [`ITreeNode`](../../../tree-node/interfaces/ITreeNode.md)\<`T`\>

### callback

(`value`) => `void`

A function to be called with the value of each visited node.

## Returns

`void`

## Remarks

This function traverses the tree level by level, visiting all nodes at each depth before moving to the next level.
