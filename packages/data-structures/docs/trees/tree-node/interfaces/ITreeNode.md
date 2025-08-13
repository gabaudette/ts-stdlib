[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [trees/tree-node](../README.md) / ITreeNode

# Interface: ITreeNode\<T\>

Defined in: [trees/tree-node.ts:11](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/tree-node.ts#L11)

Represents a node in a binary tree structure.

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Properties

### value

> **value**: `T`

Defined in: [trees/tree-node.ts:12](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/tree-node.ts#L12)

The value stored in the node.

***

### left

> **left**: `null` \| `ITreeNode`\<`T`\>

Defined in: [trees/tree-node.ts:13](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/tree-node.ts#L13)

Reference to the left child node, or `null` if none.

***

### right

> **right**: `null` \| `ITreeNode`\<`T`\>

Defined in: [trees/tree-node.ts:14](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/tree-node.ts#L14)

Reference to the right child node, or `null` if none.
