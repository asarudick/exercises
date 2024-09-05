import subsets from "../subsets";

const testCases = [
  {
    nums: [],
    expected: [[]],
  },
  {
    nums: [1],
    expected: [[], [1]],
  },
  {
    nums: [1, 2],
    expected: [[], [1], [2], [1, 2]],
  },
  {
    nums: [1, 2, 3],
    expected: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
  },
  {
    nums: [2, 1],
    expected: [[], [1], [2], [1, 2]],
  },
];

describe("subsets", () => {
  test.each(testCases)(
    "given nums $nums, returns $expected",
    ({ nums, expected }) => {
      const result = subsets(nums).sort();
      expect(result).toEqual(expected.sort());
    }
  );
});
