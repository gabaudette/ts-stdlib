import { describe as vitestDescribe, it, expect } from "vitest";
import {
	mean,
	harmonicMean,
	geometricMean,
	meanAbsoluteDeviation,
	coefficientOfVariation,
	median,
	mode,
	gap,
	interquartileRange,
	variance,
	chiSquared,
	correlationCoefficient,
	covariance,
	standardDeviation,
	poisson,
	bernoulli,
	binomialCoefficient,
	normalPDF,
	normalCDF,
	uniformPDF,
	uniformCDF,
	exponentialPDF,
	exponentialCDF,
	gammaDistribution,
	betaDistribution,
	zScore,
	tScore,
	pearsonCorrelation,
	average,
	spearmanCorrelation,
	describe,
	erf,
} from "./statistics";

vitestDescribe("statistic", () => {
	it("mean", () => {
		expect(mean([1, 2, 3, 4, 5])).toBe(3);
		expect(mean([])).toBe(0);
		expect(mean([10])).toBe(10);
	});

	it("harmonicMean", () => {
		expect(harmonicMean([1, 2, 4])).toBeCloseTo(1.7142857142857142);
		expect(harmonicMean([])).toBe(0);
		expect(harmonicMean([2, 2, 2])).toBe(2);
	});

	it("geometricMean", () => {
		expect(geometricMean([1, 2, 4])).toBeCloseTo(2);
		expect(geometricMean([])).toBe(0);
		expect(geometricMean([3, 3, 3])).toBe(3);
	});

	it("meanAbsoluteDeviation", () => {
		expect(meanAbsoluteDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.2);
		expect(meanAbsoluteDeviation([])).toBeNull();
		expect(meanAbsoluteDeviation([5, 5, 5])).toBe(0);
	});

	it("coefficientOfVariation", () => {
		expect(
			coefficientOfVariation([10, 12, 23, 23, 16, 23, 21, 16]),
		).toBeCloseTo(27.216552697590867, 5);
		expect(coefficientOfVariation([])).toBeNull();
		expect(coefficientOfVariation([5, 5, 5])).toBe(0);
	});

	it("median", () => {
		expect(median([1, 2, 3, 4, 5])).toBe(3);
		expect(median([1, 2, 3, 4])).toBe(2.5);
		expect(median([])).toBe(0);
		expect(median([7])).toBe(7);
	});

	it("mode", () => {
		expect(mode([1, 2, 2, 3])).toBe(2);
		expect(mode([1, 2, 3])).toBeNull();
		expect(mode([])).toBeNull();
		expect(mode([4, 4, 4, 4])).toBe(4);
	});

	it("gap", () => {
		expect(gap([1, 2, 3, 4, 5])).toBe(4);
		expect(gap([])).toBeNull();
		expect(gap([7])).toBe(0);
	});

	it("interquartileRange", () => {
		expect(interquartileRange([1, 2, 3, 4, 5])).toBe(3);
		expect(interquartileRange([])).toBeNull();
		expect(interquartileRange([1, 2, 3, 4])).toBe(2);
	});

	it("variance", () => {
		expect(variance([1, 2, 3, 4, 5])).toBe(2);
		expect(variance([])).toBeNull();
		expect(variance([7, 7, 7])).toBe(0);
	});

	it("chiSquared", () => {
		expect(chiSquared([10, 20, 30], [12, 18, 30])).toBeCloseTo(
			0.5555555555555556,
		);
		expect(chiSquared([1, 2], [1])).toBeNull();
		expect(chiSquared([0, 0], [0, 0])).toBe(0);
	});

	it("correlationCoefficient", () => {
		expect(correlationCoefficient([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])).toBe(1);
		expect(correlationCoefficient([1, 2, 3], [1, 2])).toBeNull();
		expect(correlationCoefficient([], [])).toBeNull();
	});

	it("covariance", () => {
		expect(covariance([1, 2, 3], [4, 5, 6])).toBe(0.6666666666666666);
		expect(covariance([1, 2], [1])).toBeNull();
		expect(covariance([], [])).toBeNull();
	});

	it("standardDeviation", () => {
		expect(standardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(Math.sqrt(2));
		expect(standardDeviation([])).toBeNull();
		expect(standardDeviation([7, 7, 7])).toBe(0);
	});

	it("poisson", () => {
		expect(poisson(2, 2)).toBeCloseTo(0.2706705664732254);
		expect(poisson(-1, 2)).toBeNull();
		expect(poisson(2, -2)).toBeNull();
	});

	it("bernoulli", () => {
		expect(bernoulli(0.5, 3, 2)).toBeCloseTo(0.375);
		expect(bernoulli(-1, 3, 2)).toBeNull();
		expect(bernoulli(0.5, -1, 2)).toBeNull();
		expect(bernoulli(0.5, 3, 4)).toBeNull();
	});

	it("binomialCoefficient", () => {
		expect(binomialCoefficient(5, 2)).toBe(10);
		expect(binomialCoefficient(5, 0)).toBe(1);
		expect(binomialCoefficient(5, 5)).toBe(1);
		expect(binomialCoefficient(-1, 2)).toBeNull();
		expect(binomialCoefficient(5, -2)).toBeNull();
		expect(binomialCoefficient(2, 5)).toBeNull();
	});

	it("normalPDF", () => {
		expect(normalPDF(0, 0, 1)).toBeCloseTo(0.3989422804014337);
		expect(normalPDF(1, 0, 1)).toBeCloseTo(0.24197072451914337);
		expect(normalPDF(0, 0, 0)).toBeNull();
		expect(normalPDF(0, 0, -1)).toBeNull();
	});

	it("normalCDF", () => {
		expect(normalCDF(0, 0, 1)).toBeCloseTo(0.5);
		expect(normalCDF(1, 0, 1)).toBeCloseTo(0.8413, 3);
		expect(normalCDF(0, 0, 0)).toBeNull();
		expect(normalCDF(0, 0, -1)).toBeNull();
	});

	it("uniformPDF", () => {
		expect(uniformPDF(0.5, 0, 1)).toBe(1);
		expect(uniformPDF(-1, 0, 1)).toBe(0);
		expect(uniformPDF(2, 0, 1)).toBe(0);
		expect(uniformPDF(0.5, 1, 0)).toBeNull();
	});

	it("uniformCDF", () => {
		expect(uniformCDF(0.5, 0, 1)).toBe(0.5);
		expect(uniformCDF(-1, 0, 1)).toBe(0);
		expect(uniformCDF(2, 0, 1)).toBe(1);
		expect(uniformCDF(0.5, 1, 0)).toBeNull();
	});

	it("exponentialPDF", () => {
		expect(exponentialPDF(2, 0.5)).toBeCloseTo(0.18393972058572117);
		expect(exponentialPDF(-1, 0.5)).toBeNull();
		expect(exponentialPDF(2, -0.5)).toBeNull();
	});

	it("exponentialCDF", () => {
		expect(exponentialCDF(2, 0.5)).toBeCloseTo(0.6321205588285577);
		expect(exponentialCDF(-1, 0.5)).toBeNull();
		expect(exponentialCDF(2, -0.5)).toBeNull();
	});

	it("gammaDistribution", () => {
		expect(gammaDistribution(2, 3, 2)).toBeCloseTo(0.29305022221974686);
		expect(gammaDistribution(-1, 3, 2)).toBeNull();
		expect(gammaDistribution(2, -3, 2)).toBeNull();
		expect(gammaDistribution(2, 3, -2)).toBeNull();
	});

	it("betaDistribution", () => {
		expect(betaDistribution(0.5, 2, 2)).toBeCloseTo(1.5);
		expect(betaDistribution(-0.5, 2, 2)).toBeNull();
		expect(betaDistribution(0.5, -2, 2)).toBeNull();
		expect(betaDistribution(0.5, 2, -2)).toBeNull();
	});

	it("zScore", () => {
		expect(zScore(10, 5, 2)).toBe(2.5);
		expect(zScore(10, 5, 0)).toBeNull();
		expect(zScore(10, 5, -1)).toBeNull();
	});

	it("tScore", () => {
		expect(tScore(10, 5, 2, 4)).toBe(5 / (2 / 2));
		expect(tScore(10, 5, 0, 4)).toBeNull();
		expect(tScore(10, 5, 2, 0)).toBeNull();
	});

	it("pearsonCorrelation", () => {
		expect(pearsonCorrelation([1, 2, 3], [1, 2, 3])).toBeCloseTo(1);
		expect(pearsonCorrelation([1, 2, 3], [3, 2, 1])).toBeCloseTo(-1);
		expect(pearsonCorrelation([1, 2], [1])).toBeNull();
		expect(pearsonCorrelation([], [])).toBeNull();
	});

	it("average", () => {
		expect(average([1, 2, 3, 4, 5])).toBe(3);
		expect(average([])).toBeNull();
		expect(average([10])).toBe(10);
	});

	it("spearmanCorrelation", () => {
		expect(spearmanCorrelation([1, 2, 3], [1, 2, 3])).toBeCloseTo(1);
		expect(spearmanCorrelation([1, 2, 3], [3, 2, 1])).toBeCloseTo(-1);
		expect(spearmanCorrelation([1, 2], [1])).toBeNull();
		expect(spearmanCorrelation([], [])).toBeNull();
	});

	it("describe", () => {
		expect(describe([1, 2, 2, 3])).toEqual({ mean: 2, median: 2, mode: 2 });
		expect(describe([])).toEqual({ mean: null, median: 0, mode: null });
	});

	it("erf", () => {
		expect(erf(0)).toBeCloseTo(0, 8);
		expect(erf(1)).toBeCloseTo(0.84270079, 6);
		expect(erf(-1)).toBeCloseTo(-0.84270079, 6);
		expect(erf(2)).toBeCloseTo(0.995322265, 6);
		expect(erf(-2)).toBeCloseTo(-0.995322265, 6);
		expect(erf(5)).toBeCloseTo(0.9999999999984626, 8);
		expect(erf(-5)).toBeCloseTo(-0.9999999999984626, 8);
	});
});
