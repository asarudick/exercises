import letterCombinations from '../letterCombinations';

describe('letterCombinations', () => {
	test('"23" -> ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
		const result = letterCombinations("23");
        expect(result).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
	});
});
