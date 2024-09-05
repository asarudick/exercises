import combinationSumII from "../combinationSumII";

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
    expected: expect.arrayContaining([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]),
  },
  {
    candidates: [2, 5, 2, 1, 2],
    target: 5,
    expected: expect.arrayContaining([[1, 2, 2], [5]]),
  },
  {
    candidates: [2, 3, 6, 7],
    target: 7,
    expected: expect.arrayContaining([[7]]),
  },
];

describe("combinationSumII", () => {
  test.each(testCases)(
    "given candidates $candidates and target $target, returns $expected",
    ({ candidates, target, expected }) => {
      expect(combinationSumII(candidates, target)).toEqual(expected);
    }
  );
});
