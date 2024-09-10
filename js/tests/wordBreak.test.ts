import { wordBreak } from "../wordBreak";

describe("wordBreak", () => {
  test.each([
    ["leetcode", ["leet", "code"], true],
    ["applepenapple", ["apple", "pen"], true],
    ["catsandog", ["cats", "dog", "sand", "and", "cat"], false],
    ["", [""], true],
    ["a", ["a"], true],
    ["ab", ["a", "b"], true],
    ["abcd", ["a", "abc", "d"], true],
    ["abcd", ["ab", "cd"], true],
    ["abcd", ["a", "b", "c"], false],
    ["aaaaaaa", ["aaaa", "aaa"], true],
    ["aaaaaaa", ["aaaa", "aa"], false],
  ])('wordBreak("%s", %j) should return %s', (s, wordDict, expected) => {
    expect(wordBreak(s, wordDict)).toBe(expected);
  });
});
