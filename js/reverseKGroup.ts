import ListNode from "./lib/ListNode";

export default function reverseKGroup(head: ListNode | null | undefined, k: number): ListNode | null | undefined {
    const result: ListNode | null | undefined = new ListNode();
    result.next = head ?? null;

    let start:  ListNode | null | undefined = result;
    let stack = [];

    while (start) {
      let cursor: ListNode | null | undefined = start.next;
      while (stack.length < k) {
        if (!cursor) {
          return result.next;
        }
        stack.push(cursor);
        cursor = cursor.next;
      }

      let end = cursor;
      cursor = start;


      while (cursor && stack.length) {
        cursor.next = stack.pop() ?? null;
        cursor = cursor.next;
      }

      if (cursor) {
        cursor.next = end ?? null;
      }
      start = cursor;
    }

    return result.next;
};