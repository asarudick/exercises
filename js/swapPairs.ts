/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "./lib/ListNode";

export default function swapPairs(head: ListNode | null | undefined): ListNode | null {
  if (!head) {
    return null;
  }

  const sentinel = new ListNode(0);
  sentinel.next = head;

  let cursor = sentinel;

  while (cursor.next?.next) {
    const first = cursor.next;
    const second = cursor.next.next;
    const last = cursor.next.next?.next;
    
    if (first.next) {
      first.next = last;
    }

    cursor.next = second;
    second.next = first;
    cursor = first;
  }

  return sentinel.next;
};