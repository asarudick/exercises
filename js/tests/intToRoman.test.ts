import intToRoman from '../intToRoman';

describe('intToRoman', () => {
	test('1 -> I', () => {
		const result = intToRoman(1);
        expect(result).toEqual('I');
	});
	test('2 -> II', () => {
		const result = intToRoman(2);
        expect(result).toEqual('II');
	});
	test('3 -> III', () => {
		const result = intToRoman(3);
        expect(result).toEqual('III');
	});
	test('4 -> IV', () => {
		const result = intToRoman(4);
        expect(result).toEqual('IV');
	});
	test('5 -> V', () => {
		const result = intToRoman(5);
        expect(result).toEqual('V');
	});
	test('6 -> VI', () => {
		const result = intToRoman(6);
        expect(result).toEqual('VI');
	});
	test('7 -> VII', () => {
		const result = intToRoman(7);
        expect(result).toEqual('VII');
	});
	test('8 -> VIII', () => {
		const result = intToRoman(8);
        expect(result).toEqual('VIII');
	});
	test('9 -> IX', () => {
		const result = intToRoman(9);
        expect(result).toEqual('IX');
	});
	test('10 -> X', () => {
		const result = intToRoman(10);
        expect(result).toEqual('X');
	});
	test('11 -> XI', () => {
		const result = intToRoman(11);
        expect(result).toEqual('XI');
	});
	test('3999 -> MMMCMXCIX', () => {
		const result = intToRoman(3999);
        expect(result).toEqual('MMMCMXCIX');
	});
});
