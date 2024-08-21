import threeSum from '../threeSum';

describe('threeSum', () => {
	test('1, 0, -1 -> 1, 0, -1', () => {
		const result = threeSum([1, 0, -1]);
        expect(result).toEqual([[-1, 0, 1]]);
	});
	test('[-1,0,1,2,-1,-4] ->[[-1,-1,2],[-1,0,1]]', () => {
		const result = threeSum([-1,0,1,2,-1,-4]);
        expect(result).toEqual([[-1,-1,2],[-1,0,1]]);
	});
	test('[-2,0,0,2,2] -> [[-2,0,2]]', () => {
		const result = threeSum([-2,0,0,2,2]);
        expect(result).toEqual([[-2,0,2]]);
	});
	test('[-1,0,1,2,-1,-4,-2,-3,3,0,4] -> [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]', () => {
		const result = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
        expect(result).toEqual([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]);
	});
});
