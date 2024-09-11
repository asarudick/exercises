import singleNumber from "../singleNumber";

const testCases = [
  {
    nums: [2, 2, 1],
    expected: 1,
  },
  {
    nums: [4, 1, 2, 1, 2],
    expected: 4,
  },
  {
    nums: [1],
    expected: 1,
  },
  {
    nums: [0, 1, 0],
    expected: 1,
  },
  {
    nums: [1, 2, 1, 3, 2],
    expected: 3,
  },
];

describe("singleNumber", () => {
  test.each(testCases)(
    "given nums $nums, returns $expected",
    ({ nums, expected }) => {
      expect(singleNumber(nums)).toEqual(expected);
    }
  );
});
