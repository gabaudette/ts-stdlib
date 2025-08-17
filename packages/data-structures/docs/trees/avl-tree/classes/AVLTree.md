[**@ts-standard-library/data-structures v1.0.4**](../../../README.md)

***

[@ts-standard-library/data-structures](../../../modules.md) / [trees/avl-tree](../README.md) / AVLTree

# Class: AVLTree\<T\>

Defined in: [trees/avl-tree.ts:45](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L45)

Represents an AVL (Adelson-Velsky and Landis) self-balancing binary search tree.

The AVLTree maintains balance by automatically performing rotations during insertions,
ensuring that the heights of the left and right subtrees of any node differ by at most one.
This guarantees O(log n) time complexity for insertion and search operations.

## Example

```typescript
const tree = new AVLTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(5);
console.log(tree.contains(10)); // true
```

## Remarks

This class provides methods for inserting values into the tree and checking for their existence.

## See

 - [AVLTreeNode](AVLTreeNode.md) for the structure of each node in the tree.
 - [https://en.wikipedia.org/wiki/AVL\_tree](https://en.wikipedia.org/wiki/AVL_tree) for more information on AVL trees.

## Type Parameters

### T

`T`

The type of values stored in the tree.

## Constructors

### Constructor

> **new AVLTree**\<`T`\>(): `AVLTree`\<`T`\>

#### Returns

`AVLTree`\<`T`\>

## Methods

### insert()

> **insert**(`value`, `compare`): `void`

Defined in: [trees/avl-tree.ts:168](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L168)

Inserts a value into the AVL tree.

#### Parameters

##### value

`T`

The value to insert into the tree.

##### compare

(`a`, `b`) => `number`

Optional comparison function to determine the order of elements.
                 Defaults to the tree's internal comparison function.

#### Returns

`void`

***

### contains()

> **contains**(`value`, `compare`): `boolean`

Defined in: [trees/avl-tree.ts:183](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/data-structures/src/trees/avl-tree.ts#L183)

Determines whether the AVL tree contains a node with the specified value.

#### Parameters

##### value

`T`

The value to search for in the tree.

##### compare

(`a`, `b`) => `number`

Optional comparison function to determine the order of values.
                 Defaults to the tree's internal comparison function.

#### Returns

`boolean`

`true` if the value exists in the tree; otherwise, `false`.
