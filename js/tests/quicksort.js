var assert = require('assert');
var quickSort = require('../quickSort');

describe('quicksort', () => {
	it('should not error on empty arrays', () => {
		var arr = [];
		quickSort(arr);
		assert.equal(arr.length, 0);
	});
	it('should sort arrays of size 2', () => {
		var arr = [2,1];
		quickSort(arr);
		assert.equal(arr.length, 2);
		assert.deepEqual(arr, [1,2]);
	});
	it('should sort arrays of size 3', () => {
		var arr = [3,2,1];
		quickSort(arr);
		assert.equal(arr.length, 3);
		assert.deepEqual(arr, [1,2,3]);
	});
	it('should sort arrays of size 4', () => {
		var arr = [4,3,2,1];
		quickSort(arr);
		assert.equal(arr.length, 4);
		assert.deepEqual(arr, [1,2,3,4]);
	});
	it('should sort arrays of size 5', () => {
		var arr = [5,4,3,2,1];
		quickSort(arr);
		assert.equal(arr.length, 5);
		assert.deepEqual(arr, [1,2,3,4,5]);
	});
	it('should sort arrays with duplicate element values', () => {
		var arr = [4,4,3,3,1,2,1];
		quickSort(arr);
		assert.equal(arr.length, 7);
		assert.deepEqual(arr, [1,1,2,3,3,4,4]);
	});
	it('should sort for arrays with double digit integers', () => {
		var arr = [74,1,4,5,6,2,7,45,23];
		quickSort(arr);
		assert.equal(arr.length, 9);
		assert.deepEqual(arr, [1,2,4,5,6,7,23,45,74]);
	});
	it('should sort for arrays with negative integers', () => {
		var arr = [-1,-2,-3,-4,-5,1,2,3,4,5,0];
		quickSort(arr);
		assert.equal(arr.length, 11);
		assert.deepEqual(arr, [-5,-4,-3,-2,-1,0,1,2,3,4,5]);
	});
	it('should sort for arrays with floats', () => {
		var arr = [1.5,1.2,1.4,1.3,1.1];
		quickSort(arr);
		assert.equal(arr.length, 5);
		assert.deepEqual(arr, [1.1,1.2,1.3,1.4,1.5]);
	});
});
