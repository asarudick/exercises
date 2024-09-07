import canJump from "../canJump";

describe("canJump", () => {
  const testCases = [
    { input: [2, 3, 1, 1, 4], expected: true },
    { input: [3, 2, 1, 0, 4], expected: false },
    { input: [0], expected: true },
    { input: [1, 1, 1, 1], expected: true },
    { input: [1, 0, 1, 0], expected: false },
    { input: [2, 0, 0], expected: true },
    { input: [2, 5, 0, 0], expected: true },
    { input: [3, 0, 8, 2, 0, 0, 1], expected: true },
    { input: [1, 1, 2, 5, 2, 1, 0, 0, 1, 3], expected: true },
    { input: [1, 1, 1, 0], expected: true },
    { input: [1, 2, 3], expected: true },
    { input: [3, 2, 1], expected: true },
  ];

  test.each(testCases)(
    "canJump($input) should return $expected",
    ({ input, expected }) => {
      expect(canJump(input)).toBe(expected);
    }
  );
});
