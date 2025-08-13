import { describe, it, expect } from "vitest";
import { distributionSort } from "./distribution-sort";

describe("distributionSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 3, 8, 1, 2, 7];
		const sorted = distributionSort(
			arr,
			(a, b) => a - b,
			(x) => x,
		);
		expect(sorted).toEqual([1, 2, 3, 5, 7, 8]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [5, 3, 8, 1, 2, 7];
		const sorted = distributionSort(
			arr,
			(a, b) => b - a,
			(x) => x,
		);
		expect(sorted).toEqual([8, 7, 5, 3, 2, 1]);
	});

	it("sorts an array of objects by a numeric property", () => {
		const arr = [
			{ id: 3, name: "c" },
			{ id: 1, name: "a" },
			{ id: 2, name: "b" },
		];
		const sorted = distributionSort(
			arr,
			(a, b) => a.id - b.id,
			(item) => item.id,
		);
		expect(sorted).toEqual([
			{ id: 1, name: "a" },
			{ id: 2, name: "b" },
			{ id: 3, name: "c" },
		]);
	});

	it("returns an empty array when input is empty", () => {
		const arr: number[] = [];
		const sorted = distributionSort(
			arr,
			(a, b) => a - b,
			(x) => x,
		);
		expect(sorted).toEqual([]);
	});

	it("handles array with identical values", () => {
		const arr = [2, 2, 2, 2];
		const sorted = distributionSort(
			arr,
			(a, b) => a - b,
			(x) => x,
		);
		expect(sorted).toEqual([2, 2, 2, 2]);
	});

	it("handles array with negative numbers", () => {
		const arr = [-5, -1, -3, -2, -4];
		const sorted = distributionSort(
			arr,
			(a, b) => a - b,
			(x) => x,
		);
		expect(sorted).toEqual([-5, -4, -3, -2, -1]);
	});

	it("handles array with one element", () => {
		const arr = [42];
		const sorted = distributionSort(
			arr,
			(a, b) => a - b,
			(x) => x,
		);
		expect(sorted).toEqual([42]);
	});
});
