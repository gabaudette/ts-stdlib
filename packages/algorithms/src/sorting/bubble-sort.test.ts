import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("bubbleSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 3, 8, 4, 2];
		expect(bubbleSort([...arr])).toEqual([2, 3, 4, 5, 8]);
	});

	it("returns an empty array when given an empty array", () => {
		expect(bubbleSort([])).toEqual([]);
	});

	it("handles an array with one element", () => {
		expect(bubbleSort([42])).toEqual([42]);
	});

	it("handles an already sorted array", () => {
		expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});

	it("handles an array with duplicate values", () => {
		expect(bubbleSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
	});

	it("handles an array with negative numbers", () => {
		expect(bubbleSort([0, -1, -3, 2, 1])).toEqual([-3, -1, 0, 1, 2]);
	});
});
