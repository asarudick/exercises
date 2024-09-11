import postorderTraversal from "../postorderTraversal";
import TreeNode, { create } from "../lib/TreeNode";

const testCases = [
  {
    values: [1, null, 2, 3],
    expected: [3, 2, 1],
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
    expected: [2, 1],
  },
  {
    values: [1, null, 2],
    expected: [2, 1],
  },
];

describe("postorderTraversal", () => {
  test.each(testCases)(
    "given tree $values, returns $expected",
    ({ values, expected }) => {
      const root = create<number>(values);
      expect(postorderTraversal(root as TreeNode<number>)).toEqual(expected);
    }
  );
});
