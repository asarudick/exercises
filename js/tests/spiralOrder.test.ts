import spiralOrder from "../spiralOrder";

const testCases = [
  {
    matrix: [],
    expected: [],
  },
  {
    matrix: [[]],
    expected: [],
  },
  {
    matrix: [[1]],
    expected: [1],
  },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ],
    expected: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
  },
];

describe("spiralOrder", () => {
  test.each(testCases)(
    "given matrix $matrix, returns $expected",
    ({ matrix, expected }) => {
      expect(spiralOrder(matrix)).toEqual(expected);
    }
  );
});
