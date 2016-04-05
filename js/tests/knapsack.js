import knapsack from '../knapsack';
import assert from 'assert';

describe('knapsack', () => {
    it('should return 9 for items: (1, 1), (3, 4), (4, 5), (5, 7)', () => {
        const result = knapsack([ 1, 3, 4, 5 ], [ 1, 4, 5, 7 ], 7);
        assert.equal(result, 9);
    });
});
