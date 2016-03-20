import assert from 'assert';
import makeSpiral from '../makeSpiral';

describe('makeSpiral', () => {
	it('should return correct spiral for size 5', () => {
        const expected = [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ] ];
		const size = 5;
        const result = makeSpiral(size);
		assert.deepEqual(result, expected);
	});
	it('should return correct spiral for size 10', () => {
        const expected = [
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
            [ 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
            [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 1 ],
            [ 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ],
            [ 1, 0, 1, 0, 0, 0, 0, 1, 0, 1 ],
            [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 1 ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
        ];
		const size = 10;
        const result = makeSpiral(size);
		assert.deepEqual(result, expected);
	});
});
