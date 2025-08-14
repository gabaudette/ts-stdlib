import { describe, it, expect } from "vitest";
import { GOLDEN_RATIO } from "./constants";

describe("GOLDEN_RATIO", () => {
	it("should be defined", () => {
		expect(GOLDEN_RATIO).toBeDefined();
	});

	it("should have the correct value", () => {
		expect(GOLDEN_RATIO).toBeCloseTo(1.618033988749895, 15);
	});
});
