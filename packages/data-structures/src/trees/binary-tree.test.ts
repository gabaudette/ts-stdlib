import { describe, it, expect, beforeEach } from "vitest";
import { BinaryTree, BinaryTreeNode } from "./binary-tree";

describe("BinaryTree", () => {
    let tree: BinaryTree<number>;

    beforeEach(() => {
        tree = new BinaryTree<number>();
    });

    it("should be empty on initialization", () => {
        expect(tree.isEmpty()).toBe(true);
        expect(tree.getRoot()).toBeNull();
    });

    it("should insert root node", () => {
        const node = tree.insert(10);
        expect(tree.isEmpty()).toBe(false);
        expect(tree.getRoot()).toBe(node);
        expect(node.value).toBe(10);
    });

    it("should insert left and right children", () => {
        const root = tree.insert(1);
        const left = tree.insert(2, root, true);
        const right = tree.insert(3, root, false);

        expect(root.left).toBe(left);
        expect(root.right).toBe(right);
        expect(left.value).toBe(2);
        expect(right.value).toBe(3);
    });

    it("should throw if inserting non-root without parent", () => {
        tree.insert(1);
        expect(() => tree.insert(2)).toThrow("Parent node must be specified for non-root insertions.");
    });

    it("should throw if left child already exists", () => {
        const root = tree.insert(1);
        tree.insert(2, root, true);
        expect(() => tree.insert(3, root, true)).toThrow("Left child already exists.");
    });

    it("should throw if right child already exists", () => {
        const root = tree.insert(1);
        tree.insert(2, root, false);
        expect(() => tree.insert(3, root, false)).toThrow("Right child already exists.");
    });

    it("should clear the tree", () => {
        tree.insert(1);
        tree.clear();
        expect(tree.isEmpty()).toBe(true);
        expect(tree.getRoot()).toBeNull();
    });

    it("should calculate height correctly", () => {
        expect(tree.getHeight()).toBe(0);
        const root = tree.insert(1);
        expect(tree.getHeight()).toBe(1);
        const left = tree.insert(2, root, true);
        expect(tree.getHeight()).toBe(2);
        tree.insert(3, left, true);
        expect(tree.getHeight()).toBe(3);
    });

    it("should calculate height for subtree", () => {
        const root = tree.insert(1);
        const left = tree.insert(2, root, true);
        const right = tree.insert(3, root, false);
        tree.insert(4, left, true);
        expect(tree.getHeight(left)).toBe(2);
        expect(tree.getHeight(right)).toBe(1);
    });
});