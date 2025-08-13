import { describe, it, expect } from "vitest";
import { tournamentSort } from "./tournament-sort";

describe("tournamentSort", () => {
	it("sorts an array of numbers in ascending order", () => {
		const arr = [5, 2, 9, 1, 5, 6];
		const sorted = tournamentSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
	});

	it("sorts an array of numbers in descending order", () => {
		const arr = [3, 7, 4, 2];
		const sorted = tournamentSort(arr, (a, b) => b - a);
		expect(sorted).toEqual([7, 4, 3, 2]);
	});

	it("sorts an array of strings alphabetically", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = tournamentSort(arr, (a, b) => a.localeCompare(b));
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("returns the same array if it has one element", () => {
		const arr = [42];
		const sorted = tournamentSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([42]);
	});

	it("returns an empty array if input is empty", () => {
		const arr: number[] = [];
		const sorted = tournamentSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([]);
	});

	it("sorts an array of objects by a property", () => {
		const arr = [{ v: 3 }, { v: 1 }, { v: 2 }];
		const sorted = tournamentSort(arr, (a, b) => a.v - b.v);
		expect(sorted).toEqual([{ v: 1 }, { v: 2 }, { v: 3 }]);
	});

	it("handles arrays with duplicate values", () => {
		const arr = [2, 3, 2, 1, 3];
		const sorted = tournamentSort(arr, (a, b) => a - b);
		expect(sorted).toEqual([1, 2, 2, 3, 3]);
	});
});
