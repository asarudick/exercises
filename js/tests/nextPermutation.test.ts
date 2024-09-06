import nextPermutation from "../nextPermutation";

describe("nextPermutation", () => {
  const testCases = [
    { input: [1, 2, 3], expected: [1, 3, 2] },
    { input: [3, 2, 1], expected: [1, 2, 3] },
    { input: [1, 1, 5], expected: [1, 5, 1] },
    { input: [1], expected: [1] },
    { input: [1, 3, 2], expected: [2, 1, 3] },
  ];

  test.each(testCases)(
    "nextPermutation($input) should return $expected",
    ({ input, expected }) => {
      nextPermutation(input);
      expect(input).toEqual(expected);
    }
  );

  test("nextPermutation should modify the input array in-place", () => {
    const input = [1, 2, 3];
    nextPermutation(input);
    expect(input).toEqual([1, 3, 2]);
  });
});
