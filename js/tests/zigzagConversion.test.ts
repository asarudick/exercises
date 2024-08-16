import zigzagConversion from '../zigzagConversion';

describe('zigzagConversion', () => {
	test('should function', () => {
		const result = zigzagConversion("PAYPALISHIRING", 3);
        expect(result).toEqual("PAHNAPLSIIGYIR");
	});
    test('ABCD -> ACBD', () => {
        const result = zigzagConversion("ABCD", 2);
        expect(result).toEqual("ACBD");
    });
});
