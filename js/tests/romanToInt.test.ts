import romanToInt from '../romanToInt';

describe('romanToInt', () => {
	test('I -> 1', () => {
		const result = romanToInt('I');
        expect(result).toEqual(1);
	});
	test('II -> 2', () => {
		const result = romanToInt('II');
        expect(result).toEqual(2);
	});
	test('III -> 3', () => {
		const result = romanToInt('III');
        expect(result).toEqual(3);
	});
	test('IV -> 4', () => {
		const result = romanToInt('IV');
        expect(result).toEqual(4);
	});
	test('V -> 5', () => {
		const result = romanToInt('V');
        expect(result).toEqual(5);
	});
	test('VI -> 6', () => {
		const result = romanToInt('VI');
        expect(result).toEqual(6);
	});
	test('VII -> 7', () => {
		const result = romanToInt('VII');
        expect(result).toEqual(7);
	});
	test('VIII -> 8', () => {
		const result = romanToInt('VIII');
        expect(result).toEqual(8);
	});
	test('IX -> 9', () => {
		const result = romanToInt('IX');
        expect(result).toEqual(9);
	});
	test('X -> 10', () => {
		const result = romanToInt('X');
        expect(result).toEqual(10);
	});
	test('XI -> 11', () => {
		const result = romanToInt('XI');
        expect(result).toEqual(11);
	});
});
