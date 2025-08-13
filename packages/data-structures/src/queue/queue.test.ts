import { beforeEach, describe, expect, it } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue<number>();
	});

	it("should enqueue and dequeue items in FIFO order", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(3);
		expect(queue.dequeue()).toBeUndefined();
	});

	it("should return undefined when dequeue is called on an empty queue", () => {
		expect(queue.dequeue()).toBeUndefined();
	});

	it("should peek at the front item without removing it", () => {
		queue.enqueue(42);
		expect(queue.peek()).toBe(42);
		expect(queue.size()).toBe(1);
		expect(queue.dequeue()).toBe(42);
		expect(queue.peek()).toBeUndefined();
	});

	it("should correctly report if the queue is empty", () => {
		expect(queue.isEmpty()).toBe(true);
		queue.enqueue(10);
		expect(queue.isEmpty()).toBe(false);
		queue.dequeue();
		expect(queue.isEmpty()).toBe(true);
	});

	it("should return the correct size", () => {
		expect(queue.size()).toBe(0);
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.size()).toBe(2);
		queue.dequeue();
		expect(queue.size()).toBe(1);
		queue.clear();
		expect(queue.size()).toBe(0);
	});

	it("should clear the queue", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.clear();
		expect(queue.isEmpty()).toBe(true);
		expect(queue.size()).toBe(0);
		expect(queue.dequeue()).toBeUndefined();
	});

	it("should return the enqueued item", () => {
		const result = queue.enqueue(99);
		expect(result).toBe(99);
	});

	it("should add items to the end of the queue", () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(3);
	});

	it("should throw an error if queue exceeds MAX_SAFE_INTEGER length", () => {
		const originalSize = queue.size;
		queue.size = () => Number.MAX_SAFE_INTEGER;
		expect(() => queue.enqueue(1)).toThrowError("Queue overflow");
		queue.size = originalSize;
	});
});

