import { describe, it, expect } from 'vitest';
import { countingSort } from './counting-sort';

describe('countingSort', () => {
    it('sorts an array of non-negative integers', () => {
        const arr = [4, 2, 2, 8, 3, 3, 1];
        expect(countingSort(arr, 8)).toEqual([1, 2, 2, 3, 3, 4, 8]);
    });

    it('returns an empty array when input is empty', () => {
        expect(countingSort([], 0)).toEqual([]);
        expect(countingSort([], 10)).toEqual([]);
    });

    it('handles arrays with all elements the same', () => {
        expect(countingSort([5, 5, 5], 5)).toEqual([5, 5, 5]);
    });

    it('handles arrays with one element', () => {
        expect(countingSort([0], 0)).toEqual([0]);
        expect(countingSort([7], 7)).toEqual([7]);
    });

    it('throws if max is negative', () => {
        expect(() => countingSort([1, 2, 3], -1)).toThrow('Max must be a non-negative integer');
    });

    it('throws if array contains negative numbers', () => {
        expect(() => countingSort([1, -2, 3], 3)).toThrow('All numbers must be between 0 and 3');
    });

    it('throws if array contains numbers greater than max', () => {
        expect(() => countingSort([1, 2, 5], 3)).toThrow('All numbers must be between 0 and 3');
    });

    it('sorts an already sorted array', () => {
        expect(countingSort([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    });

    it('sorts an array with zeros', () => {
        expect(countingSort([0, 0, 1, 2], 2)).toEqual([0, 0, 1, 2]);
    });

    it('sorts an array with max at the end', () => {
        expect(countingSort([0, 1, 2, 5], 5)).toEqual([0, 1, 2, 5]);
    });
});