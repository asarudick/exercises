import findMostFrequentTwoCharacters from '../findMostFrequentTwoCharacters';
import assert from 'assert';

describe('twoMostFrequentCharacters', () => {
    it('should return ab', () => {
        const str = "abcdefab";
        const result = findMostFrequentTwoCharacters(str);
        assert.equal(result, "ab");
    });
    it('should return bc', () => {
        const str = "ababcbcbc";
        const result = findMostFrequentTwoCharacters(str);
        assert.equal(result, "bc");
    });
});
