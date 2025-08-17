[**@ts-standard-library/data-structures v1.0.5**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/bst](../README.md) / BSTNode

# Class: BSTNode\<T\>

Defined in: [trees/bst.ts:9](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L9)

Represents a node in a Binary Search Tree (BST).
Inherits from [TreeNode](../../tree-node/classes/TreeNode.md), and is typically used to store data and references to child nodes.

## Extends

- [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

## Type Parameters

### T

`T`

The type of value stored in the node.

## Constructors

### Constructor

> **new BSTNode**\<`T`\>(`value`, `left`, `right`): `BSTNode`\<`T`\>

Defined in: [trees/tree-node.ts:48](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/tree-node.ts#L48)

#### Parameters

##### value

`T`

##### left

`null` | [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

##### right

`null` | [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\>

#### Returns

`BSTNode`\<`T`\>

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`constructor`](../../tree-node/classes/TreeNode.md#constructor)

## Properties

### value

> **value**: `T`

Defined in: [trees/tree-node.ts:49](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/tree-node.ts#L49)

The value stored in the node.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`value`](../../tree-node/classes/TreeNode.md#value)

***

### left

> **left**: `null` \| [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\> = `null`

Defined in: [trees/tree-node.ts:50](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/tree-node.ts#L50)

Reference to the left child node, or `null` if none.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`left`](../../tree-node/classes/TreeNode.md#left)

***

### right

> **right**: `null` \| [`TreeNode`](../../tree-node/classes/TreeNode.md)\<`T`\> = `null`

Defined in: [trees/tree-node.ts:51](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/tree-node.ts#L51)

Reference to the right child node, or `null` if none.

#### Inherited from

[`TreeNode`](../../tree-node/classes/TreeNode.md).[`right`](../../tree-node/classes/TreeNode.md#right)
