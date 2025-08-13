import { describe, it, expect } from "vitest";
import { shellSort } from "./shell-sort";

describe("shellSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 2, 9, 1, 5, 6];
		const sorted = shellSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 7, 4, 2, 8];
		const sorted = shellSort([...arr], (a, b) => b - a);
		expect(sorted).toEqual([8, 7, 4, 3, 2]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = shellSort([...arr], (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("handles an empty array", () => {
		const arr: number[] = [];
		const sorted = shellSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([]);
	});

	it("handles an array with one element", () => {
		const arr = [42];
		const sorted = shellSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([42]);
	});

	it("handles an array with duplicate elements", () => {
		const arr = [2, 3, 2, 1, 3];
		const sorted = shellSort([...arr], (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 2, 3, 3]);
	});

	it("sorts objects by a property", () => {
		const arr = [{ value: 3 }, { value: 1 }, { value: 2 }];
		const sorted = shellSort([...arr], (a, b) => a.value - b.value);
		expect(sorted).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }]);
	});
});
