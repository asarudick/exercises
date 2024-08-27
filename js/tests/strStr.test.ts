import strStr from '../strStr';

describe('strStr', () => {
  it('sadbutsad, sad => 0', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    const result = strStr(haystack, needle);
    expect(result).toEqual(0);
  });
  it('leetcode, leeto => 0', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';
    const result = strStr(haystack, needle);
    expect(result).toEqual(-1);
  });
  it('hello, ll => 0', () => {
    const haystack = 'hello';
    const needle = 'll';
    const result = strStr(haystack, needle);
    expect(result).toEqual(2);
  });
});
