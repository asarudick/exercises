import assert from 'assert';
import rotateArray from '../rotateArray';

describe('rotateArray', () => {
	it('should return empty array when A is empty', () => {
        var arr = [];
        var result = rotateArray(arr, 1);
		assert.deepEqual(result, []);
	});
	it('should rotate once on a small array', () => {
        var arr = [ 1, 2, 3 ];
        var result = rotateArray(arr, 1);
		assert.deepEqual(result, [ 3, 1, 2 ]);
	});
	it('should rotate twice on a small array', () => {
        var arr = [ 1, 2, 3 ];
        var result = rotateArray(arr, 2);
		assert.deepEqual(result, [ 2, 3, 1 ]);
	});
});
