import permuteUnique from "../permuteUnique";

describe("permuteUnique", () => {
  it("should return an empty array for an empty input", () => {
    expect(permuteUnique([])).toEqual([[]]);
  });

  it("should return the same array for a single element array", () => {
    expect(permuteUnique([1])).toEqual([[1]]);
  });

  it("should return all unique permutations for a two element array of duplicates", () => {
    expect(permuteUnique([1, 1])).toEqual(expect.arrayContaining([[1, 1]]));
  });

  it("should return all unique permutations for a two element array", () => {
    expect(permuteUnique([1, 2])).toEqual(
      expect.arrayContaining([
        [1, 2],
        [2, 1],
      ])
    );
  });

  it("should return all unique permutations for a three element array", () => {
    expect(permuteUnique([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    );
  });

  it("should handle arrays with duplicate elements", () => {
    expect(permuteUnique([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });
});
