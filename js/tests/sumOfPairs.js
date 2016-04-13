import sumOfPairs from '../sumOfPairs';
import assert from 'assert';

describe('sumOfPairs', () => {
    it('should return [1, 7] for [1, 4, 8, 7, 3, 15]', () => {
        const ints = [ 1, 4, 8, 7, 3, 15 ];
        const result = sumOfPairs(ints, 8);
        assert.deepEqual(result, [ 1, 7 ]);
    });
});
