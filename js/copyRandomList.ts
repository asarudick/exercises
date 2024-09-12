class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
export default function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return head;
  }

  const map = new Map<_Node, _Node>();

  const sentinel: _Node | null = new _Node();
  sentinel.next = head;
  let current: _Node | null = sentinel;

  const sentinelCopy: _Node | null = new _Node();
  let copy: _Node | null = sentinelCopy;

  while (current.next) {
    let next = new _Node(current?.next?.val);
    copy.next = next;
    copy = next;
    current = current.next;
    map.set(current, copy);
  }

  copy = sentinelCopy.next;
  current = head;

  while (current && copy) {
    copy.random = map.get(current.random as _Node) as _Node;
    copy = copy.next;
    current = current.next;
  }

  return sentinelCopy.next;
}
