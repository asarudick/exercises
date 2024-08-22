class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {

  let [first, second] = [list1, list2];
  let result: ListNode = new ListNode(0);
  let sentinel = result;

  while (first && second) {
    if (first.val < second.val) {
      result.next = new ListNode(first.val);
      result = result.next;
      first = first.next;
      continue;
    }

    if (first.val > second.val) {
      result.next = new ListNode(second.val);
      result = result.next;
      second = second.next;
      continue;
    }

    result.next = new ListNode(first.val);
    result = result.next;
    result.next = new ListNode(second.val);
    first = first.next;
    second = second.next;
    result = result.next;
  }

  while (first) {
    result.next = new ListNode(first.val);
    result = result.next;
    first = first.next;
  }

  while (second) {
    result.next = new ListNode(second.val);
    result = result.next;
    second = second.next;
  }

  return sentinel.next;
}
