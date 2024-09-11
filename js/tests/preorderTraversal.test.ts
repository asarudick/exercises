import preorderTraversal from "../preorderTraversal";
import TreeNode from "../lib/TreeNode";

function createTree(values: (number | null)[]): TreeNode | null | undefined {
  if (!values.length) return null;

  const nodes = values.map((val) => (val !== null ? new TreeNode(val) : null));
  let root = nodes[0];
  let queue = [root];

  for (let i = 1; i < nodes.length; i++) {
    let parent = queue[0];
    if (parent) {
      if (!parent.left) {
        parent.left = nodes[i] as TreeNode;
      } else if (!parent.right) {
        parent.right = nodes[i] as TreeNode;
        queue.shift();
      }
      if (nodes[i]) queue.push(nodes[i]);
    }
  }

  return root;
}

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
      const root = createTree(values);
      expect(preorderTraversal(root as TreeNode)).toEqual(expected);
    }
  );
});
