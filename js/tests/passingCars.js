import assert from 'assert';
import passingCars from '../passingCars';

describe('passingCars', () => {
	it('should return 3', () => {
        const result = passingCars(6, 11, 2);
		assert.equal(result, 3);
	});
});
