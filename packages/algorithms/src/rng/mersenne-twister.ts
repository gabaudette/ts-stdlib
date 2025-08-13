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
class MersenneTwister implements RNG {
	/**
	 * The degree of recurrence for the Mersenne Twister algorithm.
	 * This constant defines the size of the state vector array used internally by the generator.
	 * The standard value for the Mersenne Twister MT19937 implementation is 624.
	 */
	private static readonly N = 624;

	/**
	 * The period parameter for the Mersenne Twister algorithm.
	 * This constant defines the recurrence degree (M) used in the algorithm's state transition.
	 * For MT19937, the standard value is 397.
	 * @see https://en.wikipedia.org/wiki/Mersenne_Twister
	 */
	private static readonly M = 397;

	/**
	 * Constant used in the Mersenne Twister algorithm for the twist transformation.
	 * Represents the "magic" matrix A (0x9908b0df) used in the tempering process
	 * to improve the statistical properties of the generated random numbers.
	 * This value is specific to the MT19937 variant.
	 * @see https://en.wikipedia.org/wiki/Mersenne_Twister
	 */
	private static readonly MATRIX_A = 0x9908b0df;

	/**
	 * The most significant bit mask for a 32-bit unsigned integer.
	 * Used in the Mersenne Twister algorithm to extract the upper bit of a value.
	 */
	private static readonly UPPER_MASK = 0x80000000;

	/**
	 * Mask used to extract the lower 31 bits of a 32-bit integer.
	 * In the Mersenne Twister algorithm, this is typically used to separate
	 * the lower bits from the upper bit during the twist operation.
	 */
	private static readonly LOWER_MASK = 0x7fffffff;

	/**
	 * The internal state array for the Mersenne Twister pseudorandom number generator.
	 * This array holds the current state of the generator and is used to produce random numbers.
	 * Its length is determined by the constant `MersenneTwister.N`.
	 *
	 * @internal
	 */
	private mt: Uint32Array = new Uint32Array(MersenneTwister.N);

	/**
	 * Index into the state vector array for the Mersenne Twister algorithm.
	 *
	 * This value indicates the current position in the internal state array.
	 * When `mti` is greater than or equal to `MersenneTwister.N`, the state needs to be regenerated.
	 * Initialized to `MersenneTwister.N + 1` to signal that the state must be seeded before use.
	 *
	 * @internal
	 */
	private mti = MersenneTwister.N + 1;

	constructor(seed: number) {
		this.seed(seed);
	}

	/**
	 * Initializes the internal state array of the Mersenne Twister with a given seed.
	 *
	 * @param seed - The initial seed value used to set up the state array.
	 *
	 * This method sets the first element of the state array to the provided seed,
	 * then fills the rest of the array using a recurrence relation as specified by
	 * the Mersenne Twister algorithm. This ensures that the pseudo-random number
	 * generator produces a deterministic sequence based on the seed.
	 */
	private seed(seed: number) {
		this.mt[0] = seed >>> 0;
		for (this.mti = 1; this.mti < MersenneTwister.N; this.mti++) {
			this.mt[this.mti] =
				(1812433253 * (this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)) +
					this.mti) >>>
				0;
		}
	}

	/**
	 * Generates a random 32-bit unsigned integer using the Mersenne Twister algorithm.
	 *
	 * This method updates the internal state of the generator as needed and applies
	 * tempering transformations to improve the statistical properties of the output.
	 * If the generator has not been seeded, it will be seeded with a default value.
	 *
	 * @returns {number} A random 32-bit unsigned integer.
	 */
	public randomInt(): number {
		let y: number;
		const mag01 = [0x0, MersenneTwister.MATRIX_A];

		if (this.mti >= MersenneTwister.N) {
			let kk: number;

			if (this.mti === MersenneTwister.N + 1) {
				this.seed(5489);
			}

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

		/** Tempering
		 * Applies the Mersenne Twister tempering transformations to the output value.
		 */
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
