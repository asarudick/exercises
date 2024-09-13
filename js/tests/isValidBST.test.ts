import isValidBST from "../isValidBST";
import TreeNode, { create } from "../lib/TreeNode";

const testCases = [
  {
    values: [2, 1, 3],
    expected: true,
    description: "valid BST",
  },
  {
    values: [5, 1, 4, null, null, 3, 6],
    expected: false,
    description: "invalid BST",
  },
  {
    values: [],
    expected: true,
    description: "empty tree",
  },
  {
    values: [1],
    expected: true,
    description: "single node tree",
  },
  {
    values: [10, 5, 15, null, null, 6, 20],
    expected: false,
    description: "invalid BST with incorrect right subtree",
  },
];

describe("isValidBST", () => {
  test.each(testCases)(
    "given $description, returns $expected",
    ({ values, expected }) => {
      const root = create<number>(values);
      expect(isValidBST(root as TreeNode<number>)).toEqual(expected);
    }
  );
});
