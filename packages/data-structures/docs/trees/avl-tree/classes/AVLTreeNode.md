[**@ts-standard-library/data-structures v1.0.4**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/avl-tree](../README.md) / AVLTreeNode

# Class: AVLTreeNode\<T\>

Defined in: [trees/avl-tree.ts:12](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L12)

Represents a node in an AVL (Adelson-Velsky and Landis) tree.
Each node contains a value, references to its left and right child nodes,
and maintains its height for balancing purposes.

## Type Parameters

### T

`T`

The type of the value stored in the node.

## Constructors

### Constructor

> **new AVLTreeNode**\<`T`\>(`value`, `left`, `right`): `AVLTreeNode`\<`T`\>

Defined in: [trees/avl-tree.ts:14](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L14)

#### Parameters

##### value

`T`

##### left

`null` | `AVLTreeNode`\<`T`\>

##### right

`null` | `AVLTreeNode`\<`T`\>

#### Returns

`AVLTreeNode`\<`T`\>

## Properties

### height

> **height**: `number` = `1`

Defined in: [trees/avl-tree.ts:13](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L13)

The height of the node in the tree (default is 1).

***

### value

> **value**: `T`

Defined in: [trees/avl-tree.ts:15](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L15)

The value stored in the node.

***

### left

> **left**: `null` \| `AVLTreeNode`\<`T`\> = `null`

Defined in: [trees/avl-tree.ts:16](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L16)

Reference to the left child node, or null if none.

***

### right

> **right**: `null` \| `AVLTreeNode`\<`T`\> = `null`

Defined in: [trees/avl-tree.ts:17](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L17)

Reference to the right child node, or null if none.
