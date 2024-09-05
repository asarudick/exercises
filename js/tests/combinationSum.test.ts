import combinationSum from "../combinationSum";

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
    candidates: [2, 3, 6, 7],
    target: 7,
    expected: [[7], [2, 2, 3]].sort(),
  },
  {
    candidates: [2, 4, 6],
    target: 5,
    expected: [],
  },
];

describe("combinationSum", () => {
  test.each(testCases)(
    "given candidates $candidates and target $target, returns $expected",
    ({ candidates, target, expected }) => {
      const result = combinationSum(candidates, target);
      expect(result.sort()).toEqual(expected);
    }
  );
});
