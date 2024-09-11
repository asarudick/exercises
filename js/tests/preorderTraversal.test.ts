import preorderTraversal from "../preorderTraversal";
import TreeNode, { create } from "../lib/TreeNode";

const testCases = [
  {
    values: [1, null, 2, 3],
    expected: [1, 2, 3],
  },
  {
    values: [],
    expected: [],
  },
  {
    values: [1],
    expected: [1],
  },
  {
    values: [1, 2],
    expected: [1, 2],
  },
  {
    values: [1, null, 2],
    expected: [1, 2],
  },
];

describe("preorderTraversal", () => {
  test.each(testCases)(
    "given tree $values, returns $expected",
    ({ values, expected }) => {
      const root = create<number>(values);
      expect(preorderTraversal(root as TreeNode<number>)).toEqual(expected);
    }
  );
});
