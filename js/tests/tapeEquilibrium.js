import assert from 'assert';
import tapeEquilibrium from '../tapeEquilibrium';

describe('tapeEquilibrium', () => {
	it('should return 1', () => {
		const arr = [ 3, 1, 2, 4, 3 ];
        const result = tapeEquilibrium(arr);
		assert.equal(result, 1);
	});
});
