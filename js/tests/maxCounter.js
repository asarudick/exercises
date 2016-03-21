import assert from 'assert';
import maxCounter from '../maxCounter';

describe('maxCounter', () => {
	it('should return [3,2,2,4,2]', () => {
		const arr = [ 3, 4, 4, 6, 1, 4, 4 ];
        const result = maxCounter(5, arr);
		assert.deepEqual(result, [ 3, 2, 2, 4, 2 ]);
	});
});
