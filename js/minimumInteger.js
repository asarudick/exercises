import assert from 'assert';
import missingInteger from '../missingInteger';


describe('missingInteger', () => {
	it('should return 1 on empty arrays', () => {
		const arr = [];
        const result = missingInteger(arr);
		assert.equal(result, 1);
	});
	it('should return 2 element on [ 1 ]', () => {
		const arr = [ 1 ];
        const result = missingInteger(arr);
		assert.equal(result, 2);
	});
	it('should return 3 on [ 1, 2 ]', () => {
		const arr = [ 1, 2 ];
        const result = missingInteger(arr);
		assert.equal(result, 3);
	});
});
