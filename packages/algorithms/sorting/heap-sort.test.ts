import { describe, it, expect } from "vitest";
import { heapSort } from "./heap-sort";

describe("heapSort", () => {
	it("sorts an unsorted array of positive numbers", () => {
		const arr = [5, 3, 8, 4, 2];
		expect(heapSort([...arr])).toEqual([2, 3, 4, 5, 8]);
	});

	it("sorts an array with negative numbers", () => {
		const arr = [-1, -3, 2, 0, 5];
		expect(heapSort([...arr])).toEqual([-3, -1, 0, 2, 5]);
	});

	it("sorts an array with duplicate numbers", () => {
		const arr = [4, 2, 4, 2, 1];
		expect(heapSort([...arr])).toEqual([1, 2, 2, 4, 4]);
	});

	it("returns an empty array when input is empty", () => {
		expect(heapSort([])).toEqual([]);
	});

	it("returns the same array when input has one element", () => {
		expect(heapSort([42])).toEqual([42]);
	});

	it("sorts an already sorted array", () => {
		expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});

	it("sorts a reverse sorted array", () => {
		expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
	});

	it("sorts a large array", () => {
		const arr = Array.from({ length: 100 }, (_, i) => 100 - i);
		expect(heapSort([...arr])).toEqual(arr.slice().reverse());
	});

	it("modifies the input array in-place", () => {
		const arr = [3, 1, 2];
		const result = heapSort(arr);
		expect(result).toBe(arr);
		expect(arr).toEqual([1, 2, 3]);
	});
});
