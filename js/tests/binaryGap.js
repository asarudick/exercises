import assert from 'assert';
import solution from '../binaryGap';

describe('binaryGap', () => {
	it('should return 1', () => {
		const num = 5;
        const result = solution(num);
		assert.equal(result, 1);
	});
	it('should return 5', () => {
		const num = 1041;
        const result = solution(num);
		assert.equal(result, 5);
	});
	it('should return 0', () => {
		const num = 15;
        const result = solution(num);
		assert.equal(result, 0);
	});
});
