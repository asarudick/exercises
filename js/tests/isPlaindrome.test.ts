import isPalindrome from '../isPalindrome';

describe('isPalindrome', () => {
	test('1', () => {
		const result = isPalindrome(1);
        expect(result).toEqual(true);
	});
	test('11', () => {
		const result = isPalindrome(11);
        expect(result).toEqual(true);
	});
	test('12', () => {
		const result = isPalindrome(12);
        expect(result).toEqual(false);
	});
	test('121', () => {
		const result = isPalindrome(121);
        expect(result).toEqual(true);
	});
	test('1221', () => {
		const result = isPalindrome(1221);
        expect(result).toEqual(true);
	});
    test('-1', () => {
		const result = isPalindrome(-1);
        expect(result).toEqual(false);
    });
    test('-12', () => {
		const result = isPalindrome(-12);
        expect(result).toEqual(false);
    });
    test('-121', () => {
		const result = isPalindrome(-121);
        expect(result).toEqual(false);
    });
    test('123454321', () => {
		const result = isPalindrome(123454321);
        expect(result).toEqual(true);
    });
});
