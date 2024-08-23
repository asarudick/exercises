
import ListNode from "./lib/ListNode";

export default function mergeKLists(lists: ListNode[]): ListNode | null | undefined {

  if (!lists.length) {
    return null;
  }

  let result: ListNode | null | undefined = lists.shift();

  let first:  ListNode | null | undefined  = result;
  let last:  ListNode | null | undefined  = first;

  while (lists.length) {
    let second: ListNode | null | undefined = lists.shift();

    while (first && second) {
      const detached = second;
      second = second.next;

      while (first.next && first.val < detached.val) {
        first = first?.next;
      }

      detached.next = first.next;
      first.next = detached;

      if (first.val > detached.val) {
        const tmp = first.val;
        first.val = detached.val;
        detached.val = tmp;
      }

      last = first;
      first = first.next;
    }
  
  
    if (last && second) {
      last.next = second;
    }

    result = result ?? second;
    first = result;
  }
  
  return result;
}
