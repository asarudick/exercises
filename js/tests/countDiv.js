import assert from 'assert';
import countDiv from '../countDiv';

describe('countDiv', () => {
	it('should return 3', () => {
        const result = countDiv(6, 11, 2);
		assert.equal(result, 3);
	});
	it('should return 6', () => {
        const result = countDiv(0, 12, 2);
		assert.equal(result, 7);
	});
	it('should return 3', () => {
        const result = countDiv(0, 9, 3);
		assert.equal(result, 4);
	});
	it('should return 2', () => {
        const result = countDiv(0, 12, 6);
		assert.equal(result, 3);
	});
	it('should return 20', () => {
        const result = countDiv(11, 345, 17);
		assert.equal(result, 20);
	});
	it('should return 2', () => {
        const result = countDiv(1, 14, 6);
		assert.equal(result, 2);
	});
	it('should return 1', () => {
        const result = countDiv(0, 0, 11);
		assert.equal(result, 1);
	});
	it('should return 0', () => {
        const result = countDiv(1, 1, 11);
		assert.equal(result, 0);
	});
	it('should return 8', () => {
        const result = countDiv(0, 14, 2);
		assert.equal(result, 8);
	});
});
