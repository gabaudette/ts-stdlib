/**
 * Calculates the arithmetic mean (average) of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the mean of.
 * @returns The mean of the numbers. Returns 0 if the array is empty.
 */
export function mean(numbers: number[]): number {
	if (numbers.length === 0) {
		return 0;
	}

	const total = numbers.reduce((acc, val) => acc + val, 0);

	return total / numbers.length;
}

/**
 * Calculates the harmonic mean of an array of numbers.
 *
 * The harmonic mean is defined as the number of elements divided by the sum of the reciprocals of the elements.
 * Returns 0 if the input array is empty.
 *
 * @param numbers - An array of numbers for which to calculate the harmonic mean.
 * @returns The harmonic mean of the input numbers, or 0 if the array is empty.
 *
 * @example
 * ```typescript
 * const mean = harmonicMean([1, 2, 4]); // Returns 1.7142857142857142
 * ```
 */
export function harmonicMean(numbers: number[]): number {
	if (numbers.length === 0) {
		return 0;
	}

	const reciprocalSum = numbers.reduce((acc, val) => acc + 1 / val, 0);

	return numbers.length / reciprocalSum;
}

/**
 * Calculates the geometric mean of an array of numbers.
 *
 * The geometric mean is the nth root of the product of n numbers,
 * and is typically used to determine the average rate of growth or return.
 * If the input array is empty, the function returns 0.
 *
 * @param numbers - An array of numbers for which to calculate the geometric mean.
 * @returns The geometric mean of the input numbers, or 0 if the array is empty.
 */
export function geometricMean(numbers: number[]): number {
	if (numbers.length === 0) {
		return 0;
	}

	const product = numbers.reduce((acc, val) => acc * val, 1);

	return product ** (1 / numbers.length);
}

/**
 * Calculates the mean absolute deviation (MAD) of an array of numbers.
 *
 * The mean absolute deviation is the average of the absolute differences
 * between each value and the mean of the dataset.
 *
 * @param numbers - An array of numbers for which to compute the MAD.
 * @returns The mean absolute deviation of the input numbers, or `null` if the array is empty.
 *
 * @remarks
 * This function depends on a `mean` function being available in the same scope.
 *
 * @example
 * ```typescript
 * const data = [1, 2, 3, 4, 5];
 * const mad = meanAbsoluteDeviation(data); // Returns 1.2
 * ```
 */
export function meanAbsoluteDeviation(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const meanValue = mean(numbers);
	const absoluteDifferences = numbers.map((num) => Math.abs(num - meanValue));

	return mean(absoluteDifferences);
}

/**
 * Calculates the coefficient of variation (CV) for a given array of numbers.
 * The coefficient of variation is defined as the ratio of the standard deviation
 * to the mean, expressed as a percentage.
 *
 * @param numbers - An array of numbers for which to compute the coefficient of variation.
 * @returns The coefficient of variation as a percentage, or `null` if the input array is empty
 *          or if the standard deviation cannot be computed.
 *
 * @remarks
 * The coefficient of variation is useful for comparing the degree of variation
 * between different datasets, even if their means are drastically different.
 *
 * @example
 * ```typescript
 * const data = [10, 12, 23, 23, 16, 23, 21, 16];
 * const cv = coefficientOfVariation(data); // e.g., returns 27.5
 * ```
 */
export function coefficientOfVariation(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const meanValue = mean(numbers);
	const stdDev = standardDeviation(numbers);

	return stdDev !== null ? (stdDev / meanValue) * 100 : null;
}

/**
 * Calculates the median value of a list of numbers.
 *
 * The median is the middle number in a sorted, ascending or descending, list of numbers.
 * If the list has an even number of elements, the median is the average of the two middle numbers.
 * If the input array is empty, the function returns 0.
 *
 * @param numbers - An array of numbers to compute the median from.
 * @returns The median value of the input numbers, or 0 if the array is empty.
 */
export function median(numbers: number[]): number {
	if (numbers.length === 0) {
		return 0;
	}

	const sorted = [...numbers].sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);

	return sorted.length % 2 === 0
		? (sorted[mid - 1] + sorted[mid]) / 2
		: sorted[mid];
}

/**
 * Calculates the mode (the most frequently occurring value) of an array of numbers.
 *
 * @param numbers - An array of numbers to find the mode of.
 * @returns The mode of the array if there is a single mode; otherwise, returns `null`.
 *          Returns `null` if the input array is empty or if there is no unique mode.
 *
 * @example
 * ```typescript
 * mode([1, 2, 2, 3]); // returns 2
 * mode([1, 2, 3]);    // returns null (no unique mode)
 * mode([]);           // returns null (empty array)
 * ```
 */
export function mode(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const frequency: { [key: number]: number } = {};

	numbers.forEach((num) => {
		frequency[num] = (frequency[num] || 0) + 1;
	});

	const maxFreq = Math.max(...Object.values(frequency));
	const modes = Object.keys(frequency).filter(
		(key) => frequency[Number(key)] === maxFreq,
	);

	return modes.length === 1 ? Number(modes[0]) : null;
}

/**
 * Calculates the gap (range) between the maximum and minimum values in an array of numbers.
 *
 * @param numbers - An array of numbers to evaluate.
 * @returns The difference between the maximum and minimum values in the array,
 *          or `null` if the array is empty.
 */
export function gap(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	return max - min;
}

/**
 * Calculates the interquartile range (IQR) of a given array of numbers.
 *
 * The interquartile range is the difference between the third quartile (Q3) and the first quartile (Q1),
 * representing the range of the middle 50% of the data.
 *
 * @param numbers - An array of numbers for which to compute the interquartile range.
 * @returns The interquartile range as a number, or `null` if the input array is empty or quartiles cannot be determined.
 */
export function interquartileRange(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const sorted = [...numbers].sort((a, b) => a - b);
	const q1 = median(sorted.slice(0, Math.floor(sorted.length / 2)));
	const q3 = median(sorted.slice(Math.ceil(sorted.length / 2)));

	return q3 !== null && q1 !== null ? q3 - q1 : null;
}

/**
 * Calculates the variance of an array of numbers.
 *
 * The variance is a measure of how spread out a set of numbers is.
 * Returns `null` if the input array is empty.
 *
 * @param numbers - An array of numbers for which to calculate the variance.
 * @returns The variance of the numbers, or `null` if the array is empty.
 *
 * @remarks
 * This function depends on a `mean` function being available in the same scope.
 */
export function variance(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const meanValue = mean(numbers);
	const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);

	return mean(squaredDifferences);
}

/**
 * Calculates the chi-squared statistic for two arrays of observed and expected frequencies.
 *
 * The chi-squared statistic is a measure of how expectations compare to results. It is commonly used in hypothesis testing.
 *
 * @param observed - An array of observed frequencies.
 * @param expected - An array of expected frequencies.
 * @returns The chi-squared statistic as a number, or `null` if the input arrays have different lengths.
 *
 * @example
 * ```typescript
 * const observed = [10, 20, 30];
 * const expected = [12, 18, 30];
 * const chi2 = chiSquared(observed, expected); // chi2 = 0.555...
 * ```
 */
export function chiSquared(
	observed: number[],
	expected: number[],
): number | null {
	if (observed.length !== expected.length) {
		return null;
	}

	const chiSquaredValue = observed.reduce((acc, obs, i) => {
		const exp = expected[i];
		return acc + (exp === 0 ? 0 : (obs - exp) ** 2 / exp);
	}, 0);

	return chiSquaredValue;
}

/**
 * Calculates the Pearson correlation coefficient between two numeric arrays.
 *
 * The correlation coefficient measures the linear relationship between two datasets,
 * returning a value between -1 and 1. A value of 1 indicates a perfect positive linear
 * relationship, -1 indicates a perfect negative linear relationship, and 0 indicates
 * no linear relationship.
 *
 * @param x - The first array of numbers.
 * @param y - The second array of numbers.
 * @returns The Pearson correlation coefficient as a number, or `null` if the input arrays
 *          have different lengths or are empty. Returns `0` if the denominator is zero.
 *
 * @example
 * ```typescript
 * const x = [1, 2, 3, 4, 5];
 * const y = [2, 4, 6, 8, 10];
 * const r = correlationCoefficient(x, y); // r = 1
 * ```
 */
export function correlationCoefficient(
	x: number[],
	y: number[],
): number | null {
	if (x.length !== y.length || x.length === 0) {
		return null;
	}

	const meanX = mean(x);
	const meanY = mean(y);

	const numerator = x.reduce(
		(acc, xi, i) => acc + (xi - meanX) * (y[i] - meanY),
		0,
	);

	const denominator = Math.sqrt(
		x.reduce((acc, xi) => acc + (xi - meanX) ** 2, 0) *
			y.reduce((acc, yi) => acc + (yi - meanY) ** 2, 0),
	);

	return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Calculates the covariance between two numeric arrays.
 *
 * Covariance is a measure of how much two random variables vary together.
 * This function returns `null` if the input arrays are of different lengths or empty.
 *
 * @param x - The first array of numbers.
 * @param y - The second array of numbers.
 * @returns The covariance of the two arrays, or `null` if the inputs are invalid.
 */
export function covariance(x: number[], y: number[]): number | null {
	if (x.length !== y.length || x.length === 0) {
		return null;
	}

	const meanX = mean(x);
	const meanY = mean(y);

	const covarianceValue = x.reduce(
		(acc, xi, i) => acc + (xi - meanX) * (y[i] - meanY),
		0,
	);

	return covarianceValue / x.length;
}

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * The standard deviation is a measure of the amount of variation or dispersion in a set of values.
 * Returns `null` if the input array is empty.
 *
 * @param numbers - An array of numbers for which to calculate the standard deviation.
 * @returns The standard deviation of the numbers, or `null` if the array is empty.
 */
export function standardDeviation(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const varianceValue = variance(numbers);

	return varianceValue !== null ? Math.sqrt(varianceValue) : null;
}

/**
 * Calculates the probability mass function (PMF) of the Poisson distribution.
 *
 * The Poisson distribution expresses the probability of a given number of events
 * occurring in a fixed interval of time or space, given the average number of times
 * the event occurs over that interval.
 *
 * @param k - The number of occurrences (must be a non-negative integer).
 * @param lambda - The expected number of occurrences (rate parameter, must be positive).
 * @returns The probability of observing exactly `k` occurrences, or `null` if inputs are invalid.
 *
 * @remarks
 * The formula used is: P(k; λ) = (λ^k * e^(-λ)) / k!
 */
export function poisson(k: number, lambda: number): number | null {
	if (k < 0 || lambda <= 0) {
		return null;
	}

	return (lambda ** k * Math.exp(-lambda)) / factorial(k);
}

/**
 * Calculates the factorial of a non-negative integer `n`.
 *
 * The factorial of a number `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.
 * For example, `factorial(5)` returns `120` because `5 * 4 * 3 * 2 * 1 = 120`.
 *
 * @param n - A non-negative integer whose factorial is to be computed.
 * @returns The factorial of `n`.
 * @throws {RangeError} If `n` is negative.
 */
function factorial(n: number): number {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

/**
 * Calculates the probability of obtaining exactly `k` successes in `n` independent Bernoulli trials,
 * each with success probability `p`, using the binomial probability formula.
 *
 * @param p - The probability of success on a single trial (must be between 0 and 1, inclusive).
 * @param n - The total number of trials (must be a non-negative integer).
 * @param k - The number of successful outcomes desired (must be a non-negative integer, less than or equal to `n`).
 * @returns The probability of exactly `k` successes in `n` trials, or `null` if the input parameters are invalid.
 *
 * @remarks
 * This function uses the binomial coefficient to compute the probability.
 * Returns `null` if any parameter is out of range or if the binomial coefficient cannot be computed.
 */
export function bernoulli(p: number, n: number, k: number): number | null {
	if (p < 0 || p > 1 || n < 0 || k < 0 || k > n) {
		return null;
	}

	const coeff = binomialCoefficient(n, k);
	if (coeff === null) {
		return null;
	}

	return coeff * p ** k * (1 - p) ** (n - k);
}

/**
 * Calculates the binomial coefficient, also known as "n choose k", which represents
 * the number of ways to choose `k` elements from a set of `n` elements without regard to order.
 *
 * @param n - The total number of items (must be a non-negative integer).
 * @param k - The number of items to choose (must be a non-negative integer, and `k <= n`).
 * @returns The binomial coefficient as a number, or `null` if the input is invalid.
 *
 * @remarks
 * The binomial coefficient is calculated using the formula: `n! / (k! * (n - k)!)`.
 * Returns `null` if `n` or `k` is negative, or if `k` is greater than `n`.
 */
export function binomialCoefficient(n: number, k: number): number | null {
	if (n < 0 || k < 0 || k > n) {
		return null;
	}

	return factorial(n) / (factorial(k) * factorial(n - k));
}

/**
 * Calculates the probability density function (PDF) of the normal (Gaussian) distribution
 * for a given value `x`, mean, and standard deviation.
 *
 * @param x - The value at which to evaluate the PDF.
 * @param mean - The mean (μ) of the normal distribution.
 * @param stdDev - The standard deviation (σ) of the normal distribution. Must be greater than 0.
 * @returns The value of the normal PDF at `x`, or `null` if `stdDev` is not positive.
 *
 * @example
 * ```typescript
 * const pdfValue = normalPDF(0, 0, 1); // Standard normal distribution at x = 0
 * ```
 */
export function normalPDF(
	x: number,
	mean: number,
	stdDev: number,
): number | null {
	if (stdDev <= 0) {
		return null;
	}

	const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
	const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);

	return coefficient * Math.exp(exponent);
}

/**
 * Calculates the cumulative distribution function (CDF) of the normal (Gaussian) distribution
 * for a given value `x`, mean, and standard deviation.
 *
 * @param x - The value at which to evaluate the CDF.
 * @param mean - The mean (μ) of the normal distribution.
 * @param stdDev - The standard deviation (σ) of the normal distribution. Must be greater than 0.
 * @returns The probability that a normally distributed random variable is less than or equal to `x`,
 *          or `null` if `stdDev` is not positive.
 *
 * @remarks
 * This function uses the error function (`erf`) to compute the CDF.
 */
export function normalCDF(
	x: number,
	mean: number,
	stdDev: number,
): number | null {
	if (stdDev <= 0) {
		return null;
	}

	const z = (x - mean) / stdDev;

	return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

export function erf(x: number): number {
	// Approximation of the error function
	const sign = x < 0 ? -1 : 1;
	x = Math.abs(x);

	const a1 = 0.254829592;
	const a2 = -0.284496736;
	const a3 = 1.421413741;
	const a4 = -1.453152027;
	const a5 = 1.061405429;
	const p = 0.3275911;
	const t = 1 / (1 + p * x);
	const y =
		1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

	return sign * y;
}

/**
 * Calculates the probability density function (PDF) of the continuous uniform distribution
 * at a given point `x` for the interval [`a`, `b`].
 *
 * The uniform distribution is defined only when `a < b`. If `a >= b`, the function returns `null`.
 * For `x` within the interval [`a`, `b`], the PDF is `1 / (b - a)`. Otherwise, it is `0`.
 *
 * @param x - The point at which to evaluate the PDF.
 * @param a - The lower bound of the interval (must be less than `b`).
 * @param b - The upper bound of the interval (must be greater than `a`).
 * @returns The value of the PDF at `x`, or `null` if the interval is invalid.
 */
export function uniformPDF(x: number, a: number, b: number): number | null {
	if (a >= b) {
		return null;
	}

	return x >= a && x <= b ? 1 / (b - a) : 0;
}

/**
 * Computes the cumulative distribution function (CDF) of the continuous uniform distribution
 * for a given value `x` over the interval [`a`, `b`].
 *
 * The uniform CDF is defined as:
 * - 0 if `x < a`
 * - 1 if `x > b`
 * - (x - a) / (b - a) if `a <= x <= b`
 *
 * @param x - The value at which to evaluate the CDF.
 * @param a - The lower bound of the interval (must be less than `b`).
 * @param b - The upper bound of the interval (must be greater than `a`).
 * @returns The probability that a uniform random variable is less than or equal to `x`,
 *          or `null` if the interval is invalid (`a >= b`).
 */
export function uniformCDF(x: number, a: number, b: number): number | null {
	if (a >= b) {
		return null;
	}

	if (x < a) {
		return 0;
	}
	if (x > b) {
		return 1;
	}

	return (x - a) / (b - a);
}

/**
 * Calculates the probability density function (PDF) of the exponential distribution
 * for a given value `x` and rate parameter `lambda`.
 *
 * The exponential distribution is commonly used to model the time between events
 * in a Poisson process.
 *
 * @param x - The value at which to evaluate the PDF. Must be non-negative.
 * @param lambda - The rate parameter (λ) of the distribution. Must be positive.
 * @returns The probability density at `x`, or `null` if the input is invalid.
 *
 * @example
 * ```typescript
 * const pdf = exponentialPDF(2, 0.5); // Returns the PDF value at x = 2, lambda = 0.5
 * ```
 */
export function exponentialPDF(x: number, lambda: number): number | null {
	if (x < 0 || lambda <= 0) {
		return null;
	}

	return lambda * Math.exp(-lambda * x);
}

/**
 * Calculates the cumulative distribution function (CDF) of the exponential distribution
 * for a given value `x` and rate parameter `lambda`.
 *
 * The exponential CDF is defined as: F(x; λ) = 1 - exp(-λx), for x ≥ 0 and λ > 0.
 *
 * @param x - The value at which to evaluate the CDF (must be non-negative).
 * @param lambda - The rate parameter of the exponential distribution (must be positive).
 * @returns The probability that a random variable from the exponential distribution is less than or equal to `x`,
 *          or `null` if the input parameters are invalid.
 */
export function exponentialCDF(x: number, lambda: number): number | null {
	if (x < 0 || lambda <= 0) {
		return null;
	}

	return 1 - Math.exp(-lambda * x);
}

/**
 * Computes the value of the Gamma probability density function (PDF) at a given point `x`.
 *
 * The Gamma distribution is parameterized by a shape parameter `alpha` and a rate parameter `beta`.
 * The function returns `null` if `x < 0`, `alpha <= 0`, or `beta <= 0`.
 *
 * @param x - The point at which to evaluate the PDF (must be non-negative).
 * @param alpha - The shape parameter of the Gamma distribution (must be positive).
 * @param beta - The rate parameter of the Gamma distribution (must be positive).
 * @returns The value of the Gamma PDF at `x`, or `null` if the parameters are invalid.
 *
 * @remarks
 * The formula used is:
 *   f(x; α, β) = (β^α / Γ(α)) * x^(α-1) * exp(-βx)
 * where Γ(α) is the gamma function, here approximated by `factorial(alpha - 1)` for integer `alpha`.
 */
export function gammaDistribution(
	x: number,
	alpha: number,
	beta: number,
): number | null {
	if (x < 0 || alpha <= 0 || beta <= 0) {
		return null;
	}

	const coeff = beta ** alpha / factorial(alpha - 1);
	const exponent = -beta * x;

	return coeff * x ** (alpha - 1) * Math.exp(exponent);
}

/**
 * Calculates the probability density function (PDF) of the Beta distribution for a given value `x`
 * with shape parameters `alpha` and `beta`.
 *
 * The Beta distribution is defined on the interval [0, 1] and is parameterized by two positive shape parameters.
 *
 * @param x - The value at which to evaluate the PDF (should be in the range [0, 1]).
 * @param alpha - The first shape parameter (must be greater than 0).
 * @param beta - The second shape parameter (must be greater than 0).
 * @returns The value of the Beta distribution PDF at `x`, or `null` if the input is invalid.
 */
export function betaDistribution(
	x: number,
	alpha: number,
	beta: number,
): number | null {
	if (x < 0 || alpha <= 0 || beta <= 0) {
		return null;
	}

	const betaFunc = betaFunction(alpha, beta);
	if (betaFunc === null) {
		return null;
	}

	const coeff = (x ** (alpha - 1) * (1 - x) ** (beta - 1)) / betaFunc;

	return coeff;
}

/**
 * Computes the Beta function B(α, β) for two positive numbers α and β.
 *
 * The Beta function is defined as:
 *   B(α, β) = (Γ(α) * Γ(β)) / Γ(α + β)
 * where Γ(n) is the gamma function. For positive integers, this implementation
 * uses factorials: B(α, β) = ( (α-1)! * (β-1)! ) / ( (α+β-1)! )
 *
 * @param alpha - The first positive parameter (α) of the Beta function.
 * @param beta - The second positive parameter (β) of the Beta function.
 * @returns The value of the Beta function for the given parameters, or `null` if either parameter is not positive.
 */
function betaFunction(alpha: number, beta: number): number | null {
	if (alpha <= 0 || beta <= 0) {
		return null;
	}

	const numerator = factorial(alpha - 1) * factorial(beta - 1);
	const denominator = factorial(alpha + beta - 1);

	return numerator / denominator;
}

/**
 * Calculates the z-score of a value given the mean and standard deviation.
 *
 * The z-score indicates how many standard deviations an element is from the mean.
 *
 * @param x - The value for which to calculate the z-score.
 * @param mean - The mean (average) of the dataset.
 * @param stdDev - The standard deviation of the dataset. Must be greater than 0.
 * @returns The z-score as a number, or `null` if the standard deviation is not positive.
 */
export function zScore(x: number, mean: number, stdDev: number): number | null {
	if (stdDev <= 0) {
		return null;
	}

	return (x - mean) / stdDev;
}

/**
 * Calculates the t-score for a given value, mean, standard deviation, and sample size.
 *
 * The t-score is a measure of how many standard errors a data point (x) is from the sample mean.
 *
 * @param x - The value for which to calculate the t-score.
 * @param mean - The sample mean.
 * @param stdDev - The sample standard deviation. Must be greater than 0.
 * @param sampleSize - The size of the sample. Must be greater than 0.
 * @returns The t-score as a number, or `null` if `stdDev` or `sampleSize` are not positive.
 */
export function tScore(
	x: number,
	mean: number,
	stdDev: number,
	sampleSize: number,
): number | null {
	if (stdDev <= 0 || sampleSize <= 0) {
		return null;
	}

	const standardError = stdDev / Math.sqrt(sampleSize);

	return (x - mean) / standardError;
}

/**
 * Calculates the Pearson correlation coefficient between two arrays of numbers.
 *
 * The Pearson correlation coefficient measures the linear correlation between two datasets,
 * returning a value between -1 and 1, where 1 is total positive linear correlation,
 * 0 is no linear correlation, and -1 is total negative linear correlation.
 *
 * @param x - The first array of numbers.
 * @param y - The second array of numbers.
 * @returns The Pearson correlation coefficient as a number between -1 and 1,
 *          or `null` if the input arrays are of different lengths, empty, or if the calculation is not possible.
 */
export function pearsonCorrelation(x: number[], y: number[]): number | null {
	if (x.length !== y.length || x.length === 0) {
		return null;
	}

	const meanX = average(x);
	const meanY = average(y);
	if (meanX === null || meanY === null) {
		return null;
	}

	const numerator = x.reduce(
		(acc, xi, i) => acc + (xi - meanX) * (y[i] - meanY),
		0,
	);

	const denominator =
		Math.sqrt(x.reduce((acc, xi) => acc + (xi - meanX) ** 2, 0)) *
		Math.sqrt(y.reduce((acc, yi) => acc + (yi - meanY) ** 2, 0));

	return denominator === 0 ? null : numerator / denominator;
}

/**
 * Calculates the average (arithmetic mean) of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the average of.
 * @returns The average of the numbers, or `null` if the array is empty.
 */
export function average(numbers: number[]): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const sum = numbers.reduce((acc, num) => acc + num, 0);

	return sum / numbers.length;
}

/**
 * Calculates the Spearman rank correlation coefficient between two arrays of numbers.
 *
 * The Spearman correlation measures the strength and direction of the monotonic relationship
 * between two variables. It is computed by ranking the input arrays and then calculating
 * the Pearson correlation coefficient of the ranks.
 *
 * @param x - The first array of numbers.
 * @param y - The second array of numbers.
 * @returns The Spearman correlation coefficient as a number between -1 and 1,
 *          or `null` if the input arrays are of different lengths or empty.
 *
 * @remarks
 * Both input arrays must have the same non-zero length. The function internally ranks the arrays
 * and uses the Pearson correlation on the ranks.
 */
export function spearmanCorrelation(x: number[], y: number[]): number | null {
	if (x.length !== y.length || x.length === 0) {
		return null;
	}

	const rankX = rankArray(x);
	const rankY = rankArray(y);

	return pearsonCorrelation(rankX, rankY);
}

/**
 * Returns the ranks of the elements in the input array.
 * The smallest value receives rank 1, the next smallest rank 2, and so on.
 * If there are duplicate values, each occurrence receives the rank of its first appearance in the sorted array.
 *
 * @param arr - The array of numbers to rank.
 * @returns An array of ranks corresponding to the input array.
 *
 * @example
 * ```typescript
 * rankArray([30, 10, 20]); // returns [3, 1, 2]
 * ```
 */
export function rankArray(arr: number[]): number[] {
	const sorted = [...arr].sort((a, b) => a - b);
	return arr.map((value) => sorted.indexOf(value) + 1);
}

/**
 * Computes basic descriptive statistics (mean, median, and mode) for a given array of numbers.
 *
 * @param data - An array of numbers to analyze.
 * @returns An object containing the mean, median, and mode of the input data.
 *          If the input array is empty, each statistic will be `null`.
 */
export function describe(data: number[]): {
	mean: number | null;
	median: number | null;
	mode: number | null;
} {
	return {
		mean: average(data),
		median: median(data),
		mode: mode(data),
	};
}
