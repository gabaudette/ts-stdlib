[**@ts-standard-library/data-structures v1.0.4**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/binary-tree](../README.md) / BinaryTreeNode

# Class: BinaryTreeNode\<T\>

Defined in: [trees/binary-tree.ts:9](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/binary-tree.ts#L9)

Represents a node in a binary tree structure.

## Extends

- [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Constructors

### Constructor

> **new BinaryTreeNode**\<`T`\>(`value`, `left`, `right`): `BinaryTreeNode`\<`T`\>

Defined in: [trees/tree-node.ts:48](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/tree-node.ts#L48)

#### Parameters

##### value

`T`

##### left

`null` | [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

##### right

`null` | [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

#### Returns

`BinaryTreeNode`\<`T`\>

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`constructor`](../../tree-node/classes/TreeNode.md#constructor)

## Properties

### value

> **value**: `T`

Defined in: [trees/tree-node.ts:49](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/tree-node.ts#L49)

The value stored in the node.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`value`](../../tree-node/classes/TreeNode.md#value)

***

### left

> **left**: `null` \| [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\> = `null`

Defined in: [trees/tree-node.ts:50](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/tree-node.ts#L50)

Reference to the left child node, or `null` if none.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`left`](../../tree-node/classes/TreeNode.md#left)

***

### right

> **right**: `null` \| [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\> = `null`

Defined in: [trees/tree-node.ts:51](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/tree-node.ts#L51)

Reference to the right child node, or `null` if none.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`right`](../../tree-node/classes/TreeNode.md#right)
