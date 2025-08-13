import { describe, it, expect, vi } from "vitest";

import {
	groupBy,
	partition,
	unique,
	zip,
	range,
	chunk,
	last,
	first,
	intersection,
	union,
	difference,
	symmetricDifference,
	shuffle,
	distinctBy,
} from "./functions";

describe("groupBy", () => {
	it("groups objects by a string property", () => {
		const data = [
			{ category: "fruit", name: "apple" },
			{ category: "fruit", name: "banana" },
			{ category: "vegetable", name: "carrot" },
		];
		expect(groupBy(data, "category")).toEqual({
			fruit: [
				{ category: "fruit", name: "apple" },
				{ category: "fruit", name: "banana" },
			],
			vegetable: [{ category: "vegetable", name: "carrot" }],
		});
	});

	it("returns empty object for empty array", () => {
		expect(groupBy([], "foo")).toEqual({});
	});
});

describe("partition", () => {
	it("splits array by predicate", () => {
		const numbers = [1, 2, 3, 4, 5];
		const [evens, odds] = partition(numbers, (n) => n % 2 === 0);
		expect(evens).toEqual([2, 4]);
		expect(odds).toEqual([1, 3, 5]);
	});

	it("handles empty array", () => {
		expect(partition([], () => true)).toEqual([[], []]);
	});
});

describe("unique", () => {
	it("removes duplicates", () => {
		expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
	});

	it("returns empty array for empty input", () => {
		expect(unique([])).toEqual([]);
	});
});

describe("zip", () => {
	it("zips arrays of equal length", () => {
		expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
			[1, "a"],
			[2, "b"],
			[3, "c"],
		]);
	});

	it("zips arrays of different lengths", () => {
		expect(zip([1, 2], ["a", "b", "c"])).toEqual([
			[1, "a"],
			[2, "b"],
		]);
	});

	it("returns empty array if one input is empty", () => {
		expect(zip([], [1, 2])).toEqual([]);
		expect(zip([1, 2], [])).toEqual([]);
	});
});

describe("range", () => {
	it("generates a range", () => {
		expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
		expect(range(3, 7)).toEqual([3, 4, 5, 6]);
	});

	it("returns empty array if start >= end", () => {
		expect(range(5, 5)).toEqual([]);
		expect(range(6, 5)).toEqual([]);
	});
});

describe("chunk", () => {
	it("chunks array into pieces", () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
		expect(chunk([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	it("returns empty array for empty input", () => {
		expect(chunk([], 3)).toEqual([]);
	});
});

describe("last", () => {
	it("returns last n elements", () => {
		expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
		expect(last([1, 2, 3, 4])).toEqual([4]);
	});

	it("returns empty array if n <= 0", () => {
		expect(last([1, 2, 3], 0)).toEqual([]);
		expect(last([1, 2, 3], -1)).toEqual([]);
	});

	it("returns all elements if n > length", () => {
		expect(last([1, 2], 5)).toEqual([1, 2]);
	});
});

describe("first", () => {
	it("returns first n elements", () => {
		expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
		expect(first([1, 2, 3, 4])).toEqual([1]);
	});

	it("returns empty array if n <= 0", () => {
		expect(first([1, 2, 3], 0)).toEqual([]);
		expect(first([1, 2, 3], -1)).toEqual([]);
	});

	it("returns all elements if n > length", () => {
		expect(first([1, 2], 5)).toEqual([1, 2]);
	});
});

describe("intersection", () => {
	it("returns common elements", () => {
		expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
	});

	it("returns empty array if no intersection", () => {
		expect(intersection([1, 2], [3, 4])).toEqual([]);
	});
});

describe("union", () => {
	it("returns unique elements from both arrays", () => {
		expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
	});

	it("returns unique elements when one array is empty", () => {
		expect(union([1, 2], [])).toEqual([1, 2]);
		expect(union([], [3, 4])).toEqual([3, 4]);
	});
});

describe("difference", () => {
	it("returns elements in array1 not in array2", () => {
		expect(difference([1, 2, 3], [2, 4])).toEqual([1, 3]);
	});

	it("returns empty array if all elements are in array2", () => {
		expect(difference([1, 2], [1, 2, 3])).toEqual([]);
	});
});

describe("symmetricDifference", () => {
	it("returns elements unique to each array", () => {
		expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
	});

	it("returns empty array if arrays are equal", () => {
		expect(symmetricDifference([1, 2], [1, 2])).toEqual([]);
	});
});

describe("shuffle", () => {
	it("shuffles array in place", () => {
		const arr = [1, 2, 3, 4, 5];
		const copy = arr.slice();
		const shuffled = shuffle(arr);
		expect(shuffled).toHaveLength(5);
		expect(shuffled.sort()).toEqual(copy.sort());
		// Not strictly testing randomness, but should not always be equal
	});

	it("returns empty array if input is empty", () => {
		expect(shuffle([])).toEqual([]);
	});
});

describe("distinctBy", () => {
	it("returns only first occurrence by key", () => {
		const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
		expect(distinctBy(data, (item) => item.id)).toEqual([{ id: 1 }, { id: 2 }]);
	});

	it("returns empty array for empty input", () => {
		expect(distinctBy([], (x) => x)).toEqual([]);
	});
});
