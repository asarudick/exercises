import assert from 'assert';
import minimumInteger from '../minimumInteger';
import range from 'lodash/range';

describe('minimumInteger', () => {
	it('should return 1 on empty arrays', () => {
		const arr = [];
        const result = minimumInteger(arr);
		assert.equal(result, 1);
	});
	it('should return 2 element on [ 1 ]', () => {
		const arr = [ 1 ];
        const result = minimumInteger(arr);
		assert.equal(result, 2);
	});
	it('should return 3 on [ 1, 2 ]', () => {
		const arr = [ 1, 2 ];
        const result = minimumInteger(arr);
		assert.equal(result, 3);
	});
	it('should return 4 on [ 1, 2, 3, 5 ]', () => {
		const arr = [ 1, 2, 3, 5 ];
        const result = minimumInteger(arr);
		assert.equal(result, 4);
	});
	it('should return 4 on [ 1, 2, 3, 3, 2, 1 ]', () => {
		const arr = [ 1, 2, 3, 3, 2, 1 ];
        const result = minimumInteger(arr);
		assert.equal(result, 4);
	});
	it('should return 101 on [0 - 100, 102 - 200]', () => {
		const arr = range(0, 101).concat(range(102, 201));
        const result = minimumInteger(arr);
		assert.equal(result, 101);
	});
	it('should return 1 on [-100 - 0]', () => {
		const arr = range(-100, 1);
        const result = minimumInteger(arr);
		assert.equal(result, 1);
	});
});
