import longestCommonPrefix from '../longestCommonPrefix';

describe('longestCommonPrefix', () => {
	test('["flower","flow","flight"] -> fl', () => {
		const result = longestCommonPrefix([ "flower", "flow", "flight" ]);
        expect(result).toEqual(1);
	});
});
