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
  const queue: (TreeNode<T> | null)[] = [root as TreeNode<T>];

  for (let i = 1; i < nodes.length; i++) {
    const parent = queue.shift();
    if (parent) {
      if (nodes[i] !== null) {
        parent.left = nodes[i]!;
        queue.push(parent.left);
      }
      if (++i < nodes.length && nodes[i] !== null) {
        parent.right = nodes[i]!;
        queue.push(parent.right);
      }
    }
  }

  return root;
}
