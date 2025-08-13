[**@ts-stdlib/data-structures v1.0.1**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../modules.md) / [trees/tree-node](../README.md) / TreeNode

# Class: TreeNode\<T\>

Defined in: [trees/tree-node.ts:47](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/tree-node.ts#L47)

Represents a single node in a (binary) tree structure.

## Remarks

A TreeNode holds a value and up to two child references (`left` and `right`),
making it suitable for binary trees (e.g., binary search trees, heaps, or
expression trees). Children default to `null`, allowing easy creation of
leaf nodes.

This class implements the `ITreeNode<T>` interface (not shown here), which
is expected to define the shape of a tree node (value plus optional children).

## Examples

```ts
// Creating a simple chain
const leaf = new TreeNode(3);
const parent = new TreeNode(2, leaf, null);
const root = new TreeNode(1, parent, null);
```

```ts
// Building a small binary tree
const left = new TreeNode(2);
const right = new TreeNode(3);
const root = new TreeNode(1, left, right);
```

## Param

The data payload stored in the node.

## Param

(Optional) Reference to the left child node (defaults to null).

## Param

(Optional) Reference to the right child node (defaults to null).

## Extended by

- [`BinaryTreeNode`](../../binary-tree/classes/BinaryTreeNode.md)
- [`BSTNode`](../../bst/classes/BSTNode.md)

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Implements

- [`ITreeNode`](../interfaces/ITreeNode.md)\<`T`\>

## Constructors

### Constructor

> **new TreeNode**\<`T`\>(`value`, `left`, `right`): `TreeNode`\<`T`\>

Defined in: [trees/tree-node.ts:48](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/tree-node.ts#L48)

#### Parameters

##### value

`T`

##### left

`null` | `TreeNode`\<`T`\>

##### right

`null` | `TreeNode`\<`T`\>

#### Returns

`TreeNode`\<`T`\>

## Properties

### value

> **value**: `T`

Defined in: [trees/tree-node.ts:49](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/tree-node.ts#L49)

The value stored in the node.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`value`](../interfaces/ITreeNode.md#value)

***

### left

> **left**: `null` \| `TreeNode`\<`T`\> = `null`

Defined in: [trees/tree-node.ts:50](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/tree-node.ts#L50)

Reference to the left child node, or `null` if none.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`left`](../interfaces/ITreeNode.md#left)

***

### right

> **right**: `null` \| `TreeNode`\<`T`\> = `null`

Defined in: [trees/tree-node.ts:51](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/trees/tree-node.ts#L51)

Reference to the right child node, or `null` if none.

#### Implementation of

[`ITreeNode`](../interfaces/ITreeNode.md).[`right`](../interfaces/ITreeNode.md#right)
