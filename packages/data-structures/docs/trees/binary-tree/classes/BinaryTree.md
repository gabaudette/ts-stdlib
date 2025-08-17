[**@ts-standard-library/data-structures v1.0.6**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/binary-tree](../README.md) / BinaryTree

# Class: BinaryTree\<T\>

Defined in: [trees/binary-tree.ts:31](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L31)

Represents a generic binary tree data structure.

## Remarks

The `BinaryTree` class provides methods to insert nodes, retrieve the root node,
clear the tree, calculate the height of the tree, and check if the tree is empty.
Nodes can be inserted as left or right children of a specified parent node.

## Example

```typescript
const tree = new BinaryTree<number>();
const root = tree.insert(1);
const leftChild = tree.insert(2, root, true);
const rightChild = tree.insert(3, root, false);
```

## See

 - [BinaryTreeNode](BinaryTreeNode.md) for the structure of each node in the tree.
 - [https://en.wikipedia.org/wiki/Binary\_tree](https://en.wikipedia.org/wiki/Binary_tree) for more information on binary trees.

## Type Parameters

### T

`T`

The type of values stored in the tree nodes.

## Constructors

### Constructor

> **new BinaryTree**\<`T`\>(): `BinaryTree`\<`T`\>

#### Returns

`BinaryTree`\<`T`\>

## Methods

### insert()

> **insert**(`value`, `parent`, `left`): [`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

Defined in: [trees/binary-tree.ts:48](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L48)

Inserts a new node with the specified value into the binary tree.

- If the tree is empty, the new node becomes the root.
- For non-root insertions, a parent node must be specified.
- The new node is inserted as either the left or right child of the parent, based on the `left` parameter.
- Throws an error if the specified child position is already occupied.

#### Parameters

##### value

`T`

The value to store in the new node.

##### parent

The parent node to attach the new node to. If `null`, the new node becomes the root.

`null` | [`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

##### left

`boolean` = `true`

If `true`, inserts as the left child; if `false`, inserts as the right child. Defaults to `true`.

#### Returns

[`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

The newly inserted `BinaryTreeNode<T>`.

#### Throws

Error if parent is not specified for non-root insertions, or if the child position is already occupied.

***

### getRoot()

> **getRoot**(): `null` \| [`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

Defined in: [trees/binary-tree.ts:83](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L83)

Returns the root node of the binary tree.

#### Returns

`null` \| [`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

The root node of type `BinaryTreeNode<T>`, or `null` if the tree is empty.

***

### clear()

> **clear**(): `void`

Defined in: [trees/binary-tree.ts:92](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L92)

Removes all nodes from the binary tree, resetting it to an empty state.

After calling this method, the tree will have no root node and all references to nodes will be cleared.

#### Returns

`void`

***

### getHeight()

> **getHeight**(`node`): `number`

Defined in: [trees/binary-tree.ts:105](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L105)

Calculates the height of the binary tree starting from the specified node.

The height of a node is defined as the number of edges on the longest path from the node to a leaf.
If the node is `null`, the height is considered to be `0`.

#### Parameters

##### node

The node from which to calculate the height. Defaults to the root of the tree.

`null` | [`BinaryTreeNode`](BinaryTreeNode.md)\<`T`\>

#### Returns

`number`

The height of the tree from the specified node.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [trees/binary-tree.ts:121](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/data-structures/src/trees/binary-tree.ts#L121)

Determines whether the binary tree is empty.

#### Returns

`boolean`

`true` if the tree has no nodes; otherwise, `false`.
