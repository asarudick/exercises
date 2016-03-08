var assert = require('assert');
var spiralOrder = require('../spiralOrder');

describe('spiralOrder', () => {
	it('should not error on empty arrays', () => {
		var arr = [];
		var result = spiralOrder(arr);
		assert.equal(result.length, 0);
	});
	it('should return [1] for [1]', () => {
		var arr = [[1]];
		var result = spiralOrder(arr);
		assert.equal(result.length, 1);
		assert.deepEqual(result, [1]);
	});
	it('should return [1,2] for [[1,2]]', () => {
		var arr = [[1,2]];
		var result = spiralOrder(arr);
		assert.equal(result.length, 2);
		assert.deepEqual(result, [1,2]);
	});
	it('should return [1,2] for [[1][2]]', () => {
		var arr = [[1],[2]];
		var result = spiralOrder(arr);
		assert.equal(result.length, 2);
		assert.deepEqual(result, [1,2]);
	});
	it('should return [1,2,1,2] for [[1,2],[2,1]]', () => {
		var arr = [[1,2],[2,1]];
		var result = spiralOrder(arr);
		assert.equal(result.length, 4);
		assert.deepEqual(result, [1,2,1,2]);
	});
	it('should return [1,2,1,4,3,4,3,2] for [[1,2],[2,1],[3,4],[4,3]]', () => {
		var arr = [[1,2],[2,1],[3,4],[4,3]];
		var result = spiralOrder(arr);
		assert.equal(result.length, 8);
		assert.deepEqual(result, [1,2,1,4,3,4,3,2]);
	});
});
