import recoverTree from "../recoverTree";
import { create, inorderTraversal } from "../lib/TreeNode";

const testCases = [
  {
    values: [1, 3, null, null, 2],
    expected: [1, 2, 3],
    description: "tree with swapped nodes 2 and 3",
  },
  {
    values: [3, 1, 4, null, null, 2],
    expected: [1, 2, 3, 4],
    description: "tree with swapped nodes 2 and 4",
  },
  {
    values: [2, 3, 1],
    expected: [1, 2, 3],
    description: "tree with swapped nodes 1 and 3",
  },
  {
    values: [1, null, 2],
    expected: [1, 2],
    description: "already valid BST",
  },
  {
    values: [],
    expected: [],
    description: "empty tree",
  },
];

describe("recoverTree", () => {
  test.each(testCases)(
    "given $description, recovers the tree to $expected",
    ({ values, expected }) => {
      const root = create<number>(values);
      recoverTree(root!);
      expect(inorderTraversal(root!).map((n) => n.val)).toEqual(expected);
    }
  );
});
