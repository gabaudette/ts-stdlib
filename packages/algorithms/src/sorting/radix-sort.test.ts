import { describe, it, expect } from "vitest";
import { radixSort } from "./radix-sort";

describe("radixSort", () => {
	it("sorts an array of positive integers", () => {
		const arr = [170, 45, 75, 90, 802, 24, 2, 66];
		const sorted = radixSort(arr, 3);
		expect(sorted).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
	});

	it("returns an empty array when input is empty", () => {
		expect(radixSort([], 0)).toEqual([]);
	});

	it("sorts an array with one element", () => {
		expect(radixSort([42], 2)).toEqual([42]);
	});

	it("sorts an array with duplicate numbers", () => {
		const arr = [5, 3, 5, 2, 3, 1];
		const sorted = radixSort(arr, 1);
		expect(sorted).toEqual([1, 2, 3, 3, 5, 5]);
	});

	it("sorts an array with zeros", () => {
		const arr = [0, 0, 0, 0];
		expect(radixSort(arr, 1)).toEqual([0, 0, 0, 0]);
	});

	it("sorts an array with numbers of varying digit lengths", () => {
		const arr = [1, 10, 100, 1000, 2, 20, 200, 2000];
		const sorted = radixSort(arr, 4);
		expect(sorted).toEqual([1, 2, 10, 20, 100, 200, 1000, 2000]);
	});

	it("sorts an array with negative numbers (absolute value sorting)", () => {
		// The implementation sorts by absolute value, not true signed radix sort.
		const arr = [-5, -10, 0, 5, 10];
		const sorted = radixSort(arr, 2);
		expect(sorted).toEqual([0, -5, 5, -10, 10]);
	});
});
