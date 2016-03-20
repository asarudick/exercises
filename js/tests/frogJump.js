import assert from 'assert';
import frogJump from '../frogJump';


describe('frogJump', () => {
	it('should return 3 for x = 10, y = 85, d = 30', () => {
        const result = frogJump(10, 85, 30);
		assert.equal(result, 3);
	});
});
