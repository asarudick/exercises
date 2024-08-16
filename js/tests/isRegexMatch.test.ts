import isRegexMatch from '../isRegexMatch';

describe('isRegexMatch', () => {
	test('', () => {
		const result = isRegexMatch('','');
        expect(result).toEqual(true);
	});
	test('a', () => {
		const result = isRegexMatch('a','a');
        expect(result).toEqual(true);
	});
	test('aa', () => {
		const result = isRegexMatch('aa','aa');
        expect(result).toEqual(true);
	});
	test('a*', () => {
		const result = isRegexMatch('aa','a*');
        expect(result).toEqual(true);
	});
	test('a*', () => {
		const result = isRegexMatch('aaa','a*');
        expect(result).toEqual(true);
	});
	test('a.', () => {
		const result = isRegexMatch('aa','a.');
        expect(result).toEqual(true);
	});
	test('a.*', () => {
		const result = isRegexMatch('aaa','a.*');
        expect(result).toEqual(true);
	});
	test('a.*', () => {
		const result = isRegexMatch('aab','a.*');
        expect(result).toEqual(true);
	});
	test('a.*', () => {
		const result = isRegexMatch('ab','a.*');
        expect(result).toEqual(true);
	});
	test('a.*', () => {
		const result = isRegexMatch('ba','a.*');
        expect(result).toEqual(false);
	});
});
