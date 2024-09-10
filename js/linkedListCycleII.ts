import { ListNode } from "./linkedListCycle";

export default function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null | undefined = head;
  let fast: ListNode | null | undefined = head;
  let hasCycle = false;

  while (slow && fast) {
    slow = slow?.next;
    fast = fast?.next?.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) {
    return null;
  }

  slow = head;

  while (slow !== fast) {
    slow = slow?.next;
    fast = fast?.next;
  }

  return slow as ListNode;
}
