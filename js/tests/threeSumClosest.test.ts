import threeSumClosest from '../threeSumClosest';

describe('threeSumClosest', () => {
	test('[-1,2,1,-4], 1 -> 2', () => {
		const result = threeSumClosest([-1,2,1,-4], 1);
        expect(result).toEqual(2);
	});
});
