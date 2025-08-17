[**@ts-standard-library/data-structures v1.0.5**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/bst](../README.md) / BST

# Class: BST\<T\>

Defined in: [trees/bst.ts:34](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L34)

Represents a generic Binary Search Tree (BST) data structure.

## Remarks

The BST supports insertion, deletion, search, and utility operations.
A custom comparator function can be provided to determine the ordering of elements.

## Example

```typescript
const bst = new BST<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
const found = bst.find(3); // Returns the node containing 3
bst.delete(5); // Removes the node containing 5
bst.clear(); // Removes all nodes
```

## See

 - [BSTNode](BSTNode.md) for the structure of each node in the tree.
 - [https://en.wikipedia.org/wiki/Binary\_search\_tree](https://en.wikipedia.org/wiki/Binary_search_tree) for more information on binary search trees.

## Type Parameters

### T

`T`

The type of elements stored in the tree.

## Constructors

### Constructor

> **new BST**\<`T`\>(`compare`): `BST`\<`T`\>

Defined in: [trees/bst.ts:37](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L37)

#### Parameters

##### compare

(`a`, `b`) => `number`

#### Returns

`BST`\<`T`\>

## Methods

### insert()

> **insert**(`value`): `void`

Defined in: [trees/bst.ts:51](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L51)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### find()

> **find**(`value`): `null` \| [`BSTNode`](BSTNode.md)\<`T`\>

Defined in: [trees/bst.ts:76](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L76)

Searches for a node with the specified value in the binary search tree.

#### Parameters

##### value

`T`

The value to search for in the tree.

#### Returns

`null` \| [`BSTNode`](BSTNode.md)\<`T`\>

The node containing the specified value, or `null` if not found.

***

### delete()

> **delete**(`value`): `void`

Defined in: [trees/bst.ts:96](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L96)

Deletes a node with the specified value from the binary search tree.
If the value does not exist in the tree, the tree remains unchanged.

#### Parameters

##### value

`T`

The value to delete from the tree.

#### Returns

`void`

***

### getRoot()

> **getRoot**(): `null` \| [`BSTNode`](BSTNode.md)\<`T`\>

Defined in: [trees/bst.ts:136](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L136)

Returns the root node of the binary search tree.

#### Returns

`null` \| [`BSTNode`](BSTNode.md)\<`T`\>

The root node of the tree if it exists, otherwise `null`.

***

### clear()

> **clear**(): `void`

Defined in: [trees/bst.ts:151](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L151)

Removes all nodes from the binary search tree, resetting it to an empty state.

#### Returns

`void`

#### Remarks

After calling this method, the tree will contain no elements and its root will be set to `null`.

#### Example

```typescript
bst.clear();
```

***

### getHeight()

> **getHeight**(): `number`

Defined in: [trees/bst.ts:163](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/data-structures/src/trees/bst.ts#L163)

Calculates the height of the binary search tree.

The height is defined as the number of nodes along the longest path
from the root node down to the farthest leaf node. An empty tree has a height of 0.

#### Returns

`number`

The height of the tree.
