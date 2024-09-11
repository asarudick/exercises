import TreeNode from "./lib/TreeNode";

export default function preorderTraversal(
  root: TreeNode<number> | null
): number[] {
  function recurse(root: TreeNode<number> | null): number[] | null {
    if (!root) {
      return null;
    }

    let results: number[] = [root.val as number];

    const left = recurse(root.left) ?? [];
    results = results.concat(left.filter(Number) as number[]);

    const right = recurse(root.right) ?? [];
    results = results.concat(right.filter(Number) as number[]);

    return results;
  }

  return recurse(root) ?? [];
}
