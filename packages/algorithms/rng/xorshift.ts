import type { RNG } from "./interface/rng.interface";

/**
 * Implements a simple Xorshift random number generator (RNG).
 * 
 * The Xorshift algorithm is a fast, lightweight pseudo-random number generator
 * based on bitwise operations. It is suitable for non-cryptographic purposes.
 *
 * @example
 * ```typescript
 * const rng = new Xorshift(12345);
 * const randomInt = rng.randomInt(); // Returns a random 32-bit unsigned integer
 * const randomFloat = rng.random();  // Returns a random float between 0 and 1
 * ```
 *
 * @remarks
 * - The generator is seeded with a 32-bit integer.
 * - The output is not suitable for cryptographic use.
 *
 * @see https://en.wikipedia.org/wiki/Xorshift
 */
export class Xorshift implements RNG {
	private state: number;

	constructor(seed: number) {
		this.state = seed;
	}

	public randomInt(): number {
		return this.next() >>> 0;
	}

	public random(): number {
		return this.next() / 0xffffffff;
	}

	public next(): number {
		this.state ^= this.state << 13;
		this.state ^= this.state >> 17;
		this.state ^= this.state << 5;
		return this.state >>> 0;
	}
}
