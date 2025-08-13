import { describe, it, expect } from 'vitest';
import { exchangeSort } from './exchange-sort';

describe('exchangeSort', () => {
    it('sorts an array of numbers in ascending order', () => {
        const arr = [3, 1, 2];
        const result = exchangeSort([...arr], (a, b) => a - b);
        expect(result).toEqual([1, 2, 3]);
    });

    it('sorts an array of numbers in descending order', () => {
        const arr = [1, 3, 2];
        const result = exchangeSort([...arr], (a, b) => b - a);
        expect(result).toEqual([3, 2, 1]);
    });

    it('sorts an array of strings alphabetically', () => {
        const arr = ['banana', 'apple', 'cherry'];
        const result = exchangeSort([...arr], (a, b) => a.localeCompare(b));
        expect(result).toEqual(['apple', 'banana', 'cherry']);
    });

    it('returns the same array reference (in-place sort)', () => {
        const arr = [2, 1];
        const result = exchangeSort(arr, (a, b) => a - b);
        expect(result).toBe(arr);
    });

    it('handles an empty array', () => {
        const arr: number[] = [];
        const result = exchangeSort(arr, (a, b) => a - b);
        expect(result).toEqual([]);
    });

    it('handles an array with one element', () => {
        const arr = [42];
        const result = exchangeSort(arr, (a, b) => a - b);
        expect(result).toEqual([42]);
    });

    it('handles an array with duplicate elements', () => {
        const arr = [2, 3, 2, 1];
        const result = exchangeSort([...arr], (a, b) => a - b);
        expect(result).toEqual([1, 2, 2, 3]);
    });

    it('sorts objects by a property', () => {
        const arr = [{ v: 3 }, { v: 1 }, { v: 2 }];
        const result = exchangeSort([...arr], (a, b) => a.v - b.v);
        expect(result).toEqual([{ v: 1 }, { v: 2 }, { v: 3 }]);
    });
});