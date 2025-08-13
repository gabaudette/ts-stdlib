import { describe, it, expect } from "vitest";
import { quickSort } from "./quick-sort";

describe("quickSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [3, 1, 4, 1, 5, 9];
		const sorted = quickSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 1, 3, 4, 5, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 1, 4, 1, 5, 9];
		const sorted = quickSort([...arr], (a, b) => b - a);
		expect(sorted).toEqual([9, 5, 4, 3, 1, 1]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = quickSort([...arr], (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns the same array reference (in-place sort)", () => {
		const arr = [2, 1];
		const result = quickSort(arr, (a, b) => a - b);
		expect(result).toBe(arr);
		expect(arr).toEqual([1, 2]);
	});

	it("handles empty array", () => {
		const arr: number[] = [];
		const sorted = quickSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([]);
	});

	it("handles single-element array", () => {
		const arr = [42];
		const sorted = quickSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([42]);
	});

	it("sorts array of objects by property", () => {
		const arr = [{ id: 3 }, { id: 1 }, { id: 2 }];
		const sorted = quickSort([...arr], (a, b) => a.id - b.id);
		expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
	});

	it("handles array with duplicate values", () => {
		const arr = [5, 3, 5, 2, 2, 1];
		const sorted = quickSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 2, 3, 5, 5]);
	});
});
