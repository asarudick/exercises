import combinationSumII from "../combinationSumII";

const sortCombinations = (combinations: number[][]): number[][] => {
  return combinations.map(comb => comb.sort((a, b) => a - b)).sort();
};

const testCases = [
  {
    candidates: [],
    target: 7,
    expected: [],
  },
  {
    candidates: [7],
    target: 7,
    expected: [[7]],
  },
  {
    candidates: [10, 1, 2, 7, 6, 1, 5],
    target: 8,
    expected: [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ],
  },
  {
    candidates: [2, 5, 2, 1, 2],
    target: 5,
    expected: [[1, 2, 2], [5]],
  },
  {
    candidates: [2, 3, 6, 7],
    target: 7,
    expected: [[7]],
  },
];

describe("combinationSumII", () => {
  test.each(testCases)(
    "given candidates $candidates and target $target, returns $expected",
    ({ candidates, target, expected }) => {
      const result = combinationSumII(candidates, target);
      expect(sortCombinations(result)).toEqual(sortCombinations(expected));
    }
  );
});
