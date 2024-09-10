import detectCycle from "../linkedListCycleII";
import { ListNode } from "../linkedListCycle";

function createLinkedList(arr: number[], pos: number): ListNode | null {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;
  let cycleNode: ListNode | null = null;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    if (i === pos) {
      cycleNode = current;
    }
  }

  if (pos >= 0) {
    current.next = cycleNode;
  }

  return head;
}

const testCases = [
  {
    arr: [3, 2, 0, -4],
    pos: 1,
    expected: 2,
  },
  {
    arr: [1, 2],
    pos: 0,
    expected: 1,
  },
  {
    arr: [1],
    pos: -1,
    expected: null,
  },
  {
    arr: [1, 2, 3, 4, 5],
    pos: 2,
    expected: 3,
  },
  {
    arr: [],
    pos: -1,
    expected: null,
  },
];

describe("detectCycle", () => {
  test.each(testCases)(
    "given linked list $arr with cycle at position $pos, returns node with value $expected",
    ({ arr, pos, expected }) => {
      const head = createLinkedList(arr, pos);
      const result = detectCycle(head);
      if (expected === null) {
        expect(result).toBeNull();
      } else {
        expect(result?.val).toBe(expected);
      }
    }
  );
});
