import { describe, it, expect } from "vitest";
import { bogoSort } from "./bogo-sort";

describe("bogoSort", () => {
	const numberCompare = (a: number, b: number) => a - b;
	const stringCompare = (a: string, b: string) => a.localeCompare(b);

	it("should return the same array if length < 2", () => {
		const arr: number[] = [];
		expect(bogoSort(arr, numberCompare)).toBe(arr);

		const arr2 = [42];
		expect(bogoSort(arr2, numberCompare)).toBe(arr2);
	});

	it("should sort an array of numbers", () => {
		const arr = [3, 1, 2];
		const sorted = bogoSort(arr, numberCompare);
		expect(sorted).toEqual([1, 2, 3]);
		expect(sorted).toBe(arr); // in-place
	});

	it("should sort an array of strings", () => {
		const arr = ["banana", "apple", "cherry"];
		const sorted = bogoSort(arr, stringCompare);
		expect(sorted).toEqual(["apple", "banana", "cherry"]);
	});

	it("should handle already sorted arrays", () => {
		const arr = [1, 2, 3, 4];
		expect(bogoSort(arr, numberCompare)).toEqual([1, 2, 3, 4]);
	});

	it("should handle reverse sorted arrays", () => {
		const arr = [5, 4, 3, 2, 1];
		expect(bogoSort(arr, numberCompare)).toEqual([1, 2, 3, 4, 5]);
	});

	it("should handle arrays with duplicate values", () => {
		const arr = [2, 3, 2, 1];
		expect(bogoSort(arr, numberCompare)).toEqual([1, 2, 2, 3]);
	});
});
