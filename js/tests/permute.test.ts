import permute from "../permute";

describe("permute", () => {
  it("should return an empty array for an empty input", () => {
    expect(permute([])).toEqual([[]]);
  });

  it("should return the same array for a single element array", () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it("should return all permutations for a two element array", () => {
    expect(permute([1, 2])).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });

  it("should return all permutations for a three element array", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(permute([1, 1])).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });
});
