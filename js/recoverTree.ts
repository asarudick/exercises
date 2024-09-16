import TreeNode, { create, inorderTraversal } from "./lib/TreeNode";

export default function recoverTree(root: TreeNode<number> | null): void {
  if (!root) {
    return;
  }
  const inorder = inorderTraversal(root!);

  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i]! < inorder[i - 1]!) {
      const tmp = inorder[i]!.val;
      inorder[i]!.val = inorder[i - 1]!.val;
      inorder[i - 1]!.val = tmp;
      break;
    }
  }
  console.log(inorder);
}
