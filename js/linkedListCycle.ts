export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null | undefined = head,
    slow: ListNode | null | undefined = head;
  while (fast && slow) {
    fast = fast?.next?.next;
    slow = slow?.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
