[**@ts-stdlib/data-structures v0.1.0**](../../../README.md)

***

[@ts-stdlib/data-structures](../../../README.md) / [trees/bst](../README.md) / BST

# Class: BST\<T\>

Defined in: [trees/bst.ts:34](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L34)

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

Defined in: [trees/bst.ts:37](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L37)

#### Parameters

##### compare

(`a`, `b`) => `number`

#### Returns

`BST`\<`T`\>

## Methods

### insert()

> **insert**(`value`): `void`

Defined in: [trees/bst.ts:49](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L49)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### find()

> **find**(`value`): `null` \| [`BSTNode`](BSTNode.md)\<`T`\>

Defined in: [trees/bst.ts:67](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L67)

#### Parameters

##### value

`T`

#### Returns

`null` \| [`BSTNode`](BSTNode.md)\<`T`\>

***

### delete()

> **delete**(`value`): `void`

Defined in: [trees/bst.ts:77](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L77)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### getRoot()

> **getRoot**(): `null` \| [`BSTNode`](BSTNode.md)\<`T`\>

Defined in: [trees/bst.ts:111](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L111)

#### Returns

`null` \| [`BSTNode`](BSTNode.md)\<`T`\>

***

### clear()

> **clear**(): `void`

Defined in: [trees/bst.ts:115](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L115)

#### Returns

`void`

***

### getHeight()

> **getHeight**(): `number`

Defined in: [trees/bst.ts:118](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/trees/bst.ts#L118)

#### Returns

`number`
