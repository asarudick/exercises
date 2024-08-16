import isPalindrome from '../isPalindrome';

describe('isPalindrome', () => {
	test('should function', () => {
		const result = isPalindrome("PAYPALISHIRING", 3);
        expect(result).toEqual("PAHNAPLSIIGYIR");
	});
    test('ABCD -> ACBD', () => {
        const result = isPalindrome("ABCD", 2);
        expect(result).toEqual("ACBD");
    });
});
