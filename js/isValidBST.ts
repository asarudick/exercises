import TreeNode from "./lib/TreeNode";
export default function isValidBST(root: TreeNode<number> | null): boolean {
  function isValid(
    root: TreeNode<number> | null,
    min: number = -Infinity,
    max: number = Infinity
  ): boolean {
    if (!root) {
      return true;
    }
    return (
      root.val! < max &&
      root.val! > min &&
      isValid(root.left, min, root.val!) &&
      (isValid(root.right, root.val!, max) as boolean)
    );
  }

  return isValid(root);
}
