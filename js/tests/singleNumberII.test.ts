import singleNumber from "../singleNumberII";

const testCases = [
  {
    nums: [2, 2, 3, 2],
    expected: 3,
  },
  {
    nums: [0, 1, 0, 1, 0, 1, 99],
    expected: 99,
  },
  {
    nums: [30000, 500, 100, 30000, 100, 30000, 100],
    expected: 500,
  },
  {
    nums: [1],
    expected: 1,
  },
  {
    nums: [-2, -2, 1, -2],
    expected: 1,
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
