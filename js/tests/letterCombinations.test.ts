import letterCombinations from '../letterCombinations';

describe('letterCombinations', () => {
	test('"" -> []', () => {
		const result = letterCombinations("");
        expect(result).toEqual([]);
	});
	test('"2" -> ["a", "b", "c"]', () => {
		const result = letterCombinations("2");
        expect(result).toEqual(["a", "b", "c"]);
	});
	test('"23" -> ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
		const result = letterCombinations("23");
        expect(result).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
	});
});
