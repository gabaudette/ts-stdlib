import { beforeEach, describe, expect, it } from "vitest";
import { BoundedQueue } from "./bounded-queue";

describe("BoundedQueue", () => {
	let queue: BoundedQueue<number>;

	beforeEach(() => {
		queue = new BoundedQueue<number>(3);
	});

	it("should enqueue items", () => {
		expect(queue.enqueue(1)).toBe(1);
		expect(queue.enqueue(2)).toBe(2);
		expect(queue.enqueue(3)).toBe(3);
		expect(() => queue.enqueue(4)).toThrowError("Queue overflow");
	});

	it("should dequeue items in FIFO order", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(3);
		expect(queue.dequeue()).toBe(undefined);
	});

	it("should report correct size", () => {
		expect(queue.size()).toBe(0);
		queue.enqueue(1);
		expect(queue.size()).toBe(1);
		queue.enqueue(2);
		expect(queue.size()).toBe(2);
		queue.dequeue();
		expect(queue.size()).toBe(1);
	});

	it("should not exceed capacity", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		expect(() => queue.enqueue(4)).toThrowError("Queue overflow");
		expect(queue.size()).toBe(3);
	});
});
