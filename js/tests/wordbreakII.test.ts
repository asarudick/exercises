import wordBreak from "../wordbreakII";

const testCases = [
  {
    s: "catsanddog",
    wordDict: ["cat", "cats", "and", "sand", "dog"],
    expected: ["cat sand dog", "cats and dog"],
  },
  {
    s: "pineapplepenapple",
    wordDict: ["apple", "pen", "applepen", "pine", "pineapple"],
    expected: [
      "pine apple pen apple",
      "pine applepen apple",
      "pineapple pen apple",
    ],
  },
  {
    s: "catsandog",
    wordDict: ["cats", "dog", "sand", "and", "cat"],
    expected: [],
  },
  {
    s: "",
    wordDict: ["cat", "dog"],
    expected: [],
  },
  {
    s: "a",
    wordDict: ["a"],
    expected: ["a"],
  },
  {
    s: "aaaaaaa",
    wordDict: ["aaaa", "aaa"],
    expected: ["aaa aaaa", "aaaa aaa"],
  },
];

describe("wordBreak", () => {
  test.each(testCases)(
    "given string $s and wordDict $wordDict, returns $expected",
    ({ s, wordDict, expected }) => {
      expect(wordBreak(s, wordDict)).toEqual(expected);
    }
  );
});
