import { describe, it, expect } from "vitest";
import { selectionSort } from "./selection-sort";

describe("selectionSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 2, 9, 1, 5, 6];
		const sorted = selectionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 7, 4, 2];
		const sorted = selectionSort([...arr], (a, b) => b - a);
		expect(sorted).toEqual([7, 4, 3, 2]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = selectionSort([...arr], (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns the same array if it has one element", () => {
		const arr = [42];
		const sorted = selectionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([42]);
	});

	it("returns the same array if it is empty", () => {
		const arr: number[] = [];
		const sorted = selectionSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([]);
	});

	it("sorts an array of objects by a property", () => {
		const arr = [{ value: 3 }, { value: 1 }, { value: 2 }];
		const sorted = selectionSort([...arr], (a, b) => a.value - b.value);
		expect(sorted).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }]);
	});

	it("does not mutate the original array", () => {
		const arr = [3, 2, 1];
		const copy = [...arr];
		selectionSort(copy, (a, b) => a - b);
		expect(arr).toEqual([3, 2, 1]);
	});
});
