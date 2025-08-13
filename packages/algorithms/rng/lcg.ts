import type { RNG } from "./interface/rng.interface";

/**
 * Linear Congruential Generator (LCG) implementation of a pseudo-random number generator (PRNG).
 *
 * This class generates a sequence of pseudo-random numbers using the linear congruential method:
 *   X_{n+1} = (a * X_n + c) mod m
 *
 * - `m` (modulus): 2^31 (0x80000000)
 * - `a` (multiplier): 0x4c1906
 * - `c` (increment): 1
 *
 * @implements {RNG}
 *
 * @example
 * ```typescript
 * const rng = new LCG(12345);
 * const randomValue = rng.random(); // Returns a floating-point number in [0, 1)
 * const randomInt = rng.randomInt(); // Returns a pseudo-random integer
 * ```
 *
 * @remarks
 * The quality of randomness depends on the choice of parameters and the seed.
 * This implementation is suitable for non-cryptographic purposes.
 */
export class LCG implements RNG {
	/**
	 * The modulus parameter for the linear congruential generator (LCG).
	 * Determines the range of generated random numbers and affects the period of the sequence.
	 */
	private m: number;

	/**
	 * The multiplier parameter used in the linear congruential generator (LCG) algorithm.
	 * Determines how the seed value is transformed in each iteration.
	 * Typically chosen to ensure a long period and good randomness properties.
	 */
	private a: number;

    /**
     * The increment value used in the linear congruential generator (LCG) algorithm.
     * This constant affects the sequence of pseudo-random numbers generated.
     * Typically, it should be chosen carefully to ensure a full period of the generator.
     */
	private c: number;
	private state: number;

	constructor(seed: number) {
		this.m = 0x80000000;
		this.a = 0x4c1906;
		this.c = 0x00000001;
		this.state = seed;
	}

	/**
	 * Generates a random integer using the linear congruential generator (LCG).
	 *
	 * @returns {number} A pseudo-random integer.
	 */
	public randomInt(): number {
		return this.next();
	}

	/**
	 * Generates a pseudo-random floating-point number in the range [0, 1).
	 *
	 * @returns {number} A pseudo-random number greater than or equal to 0 and less than 1.
	 */
	public random(): number {
		return this.next() / this.m;
	}

	/**
	 * Generates the next pseudo-random number in the sequence using the linear congruential generator (LCG) algorithm.
	 *
	 * Updates the internal state based on the formula: state = (a * state + c) % m,
	 * where `a`, `c`, and `m` are the LCG parameters.
	 *
	 * @returns The next pseudo-random number in the sequence.
	 */
	public next(): number {
		this.state = (this.a * this.state + this.c) % this.m;
		return this.state;
	}
}
