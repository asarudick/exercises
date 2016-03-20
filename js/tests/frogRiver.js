import assert from 'assert';
import frogRiver from '../frogRiver';


describe('frogRiver', () => {
	it('should return -1 when no jump is available', () => {
		const arr = [ 2 ];
        const result = frogRiver(3, arr);
		assert.equal(result, -1);
	});
	it('should return 0 for [1]', () => {
		const arr = [ 1 ];
        const result = frogRiver(1, arr);
		assert.equal(result, 0);
	});
	it('should return 1 for [1, 2]', () => {
		const arr = [ 1, 2 ];
        const result = frogRiver(2, arr);
		assert.equal(result, 1);
	});
	it('should return 2 for [1, 2, 3]', () => {
		const arr = [ 1, 2, 3 ];
        const result = frogRiver(3, arr);
		assert.equal(result, 2);
	});
	it('should return -1 for [1, 2, 3]', () => {
		const arr = [ 1, 2, 3 ];
        const result = frogRiver(4, arr);
		assert.equal(result, -1);
	});
});
