import type { RNG } from "./interface/rng.interface";

/**
 * Implements the Mersenne Twister pseudorandom number generator (MT19937).
 *
 * The Mersenne Twister is a widely used PRNG known for its long period (2^19937−1),
 * high performance, and high-quality randomness. This implementation provides methods
 * to generate 32-bit unsigned integers and floating-point numbers in the range [0, 1).
 *
 * @implements {RNG}
 *
 * @example
 * ```typescript
 * const mt = new MersenneTwister(1234);
 * const int = mt.randomInt(); // 32-bit unsigned integer
 * const float = mt.random();  // floating-point number in [0, 1)
 * ```
 *
 * @remarks
 * - The generator must be seeded before use. If not seeded, a default seed is used.
 * - Not cryptographically secure.
 *
 * @see https://en.wikipedia.org/wiki/Mersenne_Twister
 */
export class MersenneTwister {
	private static readonly N = 624;
	private static readonly M = 397;
	private static readonly MATRIX_A = 0x9908b0df;
	private static readonly UPPER_MASK = 0x80000000;
	private static readonly LOWER_MASK = 0x7fffffff;

	private mt: number[] = new Array(MersenneTwister.N);
	private mti: number = MersenneTwister.N + 1;

	constructor(seed: number) {
		this.init_genrand(seed >>> 0);
	}

	private init_genrand(s: number) {
		this.mt[0] = s >>> 0;
		for (this.mti = 1; this.mti < MersenneTwister.N; this.mti++) {
			const prev = this.mt[this.mti - 1] >>> 0;
			this.mt[this.mti] =
				(1812433253 * (prev ^ (prev >>> 30)) + this.mti) >>> 0;
		}
	}

	/**
	 * Generates a random 32-bit unsigned integer using the Mersenne Twister algorithm.
	 *
	 * This method updates the internal state of the generator as needed and applies
	 * tempering transformations to improve the statistical properties of the output.
	 *
	 * @returns {number} A random 32-bit unsigned integer.
	 */
	public randomInt(): number {
		let y: number;
		const mag01 = [0x0, MersenneTwister.MATRIX_A];

		if (this.mti >= MersenneTwister.N) {
			let kk: number;

			for (kk = 0; kk < MersenneTwister.N - MersenneTwister.M; kk++) {
				y =
					(this.mt[kk] & MersenneTwister.UPPER_MASK) |
					(this.mt[kk + 1] & MersenneTwister.LOWER_MASK);
				this.mt[kk] =
					this.mt[kk + MersenneTwister.M] ^ (y >>> 1) ^ mag01[y & 0x1];
			}
			for (; kk < MersenneTwister.N - 1; kk++) {
				y =
					(this.mt[kk] & MersenneTwister.UPPER_MASK) |
					(this.mt[kk + 1] & MersenneTwister.LOWER_MASK);
				this.mt[kk] =
					this.mt[kk + (MersenneTwister.M - MersenneTwister.N)] ^
					(y >>> 1) ^
					mag01[y & 0x1];
			}
			y =
				(this.mt[MersenneTwister.N - 1] & MersenneTwister.UPPER_MASK) |
				(this.mt[0] & MersenneTwister.LOWER_MASK);
			this.mt[MersenneTwister.N - 1] =
				this.mt[MersenneTwister.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];

			this.mti = 0;
		}

		y = this.mt[this.mti++];

		// Tempering
		y ^= y >>> 11;
		y ^= (y << 7) & 0x9d2c5680;
		y ^= (y << 15) & 0xefc60000;
		y ^= y >>> 18;

		return y >>> 0;
	}

	/**
	 * Generates a random floating-point number in the range [0, 1).
	 *
	 * @returns {number} A pseudo-random number greater than or equal to 0 and less than 1.
	 */
	public random(): number {
		return this.randomInt() * (1.0 / 4294967296.0);
	}
}