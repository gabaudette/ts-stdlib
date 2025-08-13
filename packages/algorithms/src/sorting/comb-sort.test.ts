import { describe, it, expect } from "vitest";
import { combSort } from "./comb-sort";

describe("combSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 3, 8, 4, 2];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([2, 3, 4, 5, 8]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = combSort(arr, (a, b) => b - a);
		expect(result).toEqual([5, 4, 3, 2, 1]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const result = combSort(arr, (a, b) => a.localeCompare(b));
		expect(result).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns the same array reference (in-place sort)", () => {
		const arr = [3, 1, 2];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toBe(arr);
	});

	it("handles an empty array", () => {
		const arr: number[] = [];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([]);
	});

	it("handles an array with one element", () => {
		const arr = [42];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([42]);
	});

	it("handles an array with duplicate elements", () => {
		const arr = [4, 2, 2, 4, 3];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([2, 2, 3, 4, 4]);
	});

	it("handles an already sorted array", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("handles an array with negative numbers", () => {
		const arr = [0, -1, -3, 2, 1];
		const result = combSort(arr, (a, b) => a - b);
		expect(result).toEqual([-3, -1, 0, 1, 2]);
	});
});
