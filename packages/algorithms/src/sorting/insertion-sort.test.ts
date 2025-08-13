import { describe, it, expect } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("insertionSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 2, 9, 1, 5, 6];
		const sorted = insertionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 1, 4, 1, 5];
		const sorted = insertionSort([...arr], (a, b) => b - a);
		expect(sorted).toEqual([5, 4, 3, 1, 1]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = insertionSort([...arr], (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns the same array reference (in-place)", () => {
		const arr = [2, 1];
		const result = insertionSort(arr, (a, b) => a - b);
		expect(result).toBe(arr);
	});

	it("returns the array unchanged if it has less than 2 elements", () => {
		expect(insertionSort([], (a, b) => a - b)).toEqual([]);
		expect(insertionSort([42], (a, b) => a - b)).toEqual([42]);
	});

	it("sorts an array of objects by a property", () => {
		const arr = [{ v: 3 }, { v: 1 }, { v: 2 }];
		const sorted = insertionSort([...arr], (a, b) => a.v - b.v);
		expect(sorted).toEqual([{ v: 1 }, { v: 2 }, { v: 3 }]);
	});

	it("handles already sorted arrays", () => {
		const arr = [1, 2, 3, 4, 5];
		const sorted = insertionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 3, 4, 5]);
	});

	it("handles arrays with duplicate values", () => {
		const arr = [2, 3, 2, 1, 3];
		const sorted = insertionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 2, 3, 3]);
	});
});
