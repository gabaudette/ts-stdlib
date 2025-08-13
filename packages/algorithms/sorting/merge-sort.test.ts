import { describe, it, expect } from "vitest";
import { mergeSort } from "./merge-sort";

describe("mergeSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 2, 9, 1, 5, 6];
		const sorted = mergeSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 7, 2, 8, 1];
		const sorted = mergeSort(arr, (a, b) => b - a);
		expect(sorted).toEqual([8, 7, 3, 2, 1]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = mergeSort(arr, (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns an empty array when input is empty", () => {
		const arr: number[] = [];
		const sorted = mergeSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([]);
	});

	it("returns the same array when input has one element", () => {
		const arr = [42];
		const sorted = mergeSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([42]);
	});

	it("sorts an array of objects by a property", () => {
		const arr = [
			{ id: 3, name: "c" },
			{ id: 1, name: "a" },
			{ id: 2, name: "b" },
		];
		const sorted = mergeSort(arr, (a, b) => a.id - b.id);
		expect(sorted).toEqual([
			{ id: 1, name: "a" },
			{ id: 2, name: "b" },
			{ id: 3, name: "c" },
		]);
	});

	it("does not mutate the original array", () => {
		const arr = [3, 1, 2];
		const arrCopy = [...arr];
		mergeSort(arr, (a, b) => a - b);
		expect(arr).toEqual(arrCopy);
	});
});
