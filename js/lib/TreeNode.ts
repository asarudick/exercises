export default class TreeNode<T> {
  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function create<T>(
  values: (T | null)[]
): TreeNode<T> | null | undefined {
  if (!values.length) return null;

  const nodes = values.map((val) =>
    val !== null ? new TreeNode<T>(val) : null
  );
  const root = nodes[0];

  while (nodes.length) {
    let node = nodes.shift();
    if (!node) {
      continue;
    }
    node.left = nodes.shift() as TreeNode<T> | null;
    node.right = nodes.shift() as TreeNode<T> | null;
    nodes.unshift(node.left);
    nodes.unshift(node.right);
  }

  return root;
}
