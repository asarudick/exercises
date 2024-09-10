import hasCycle, { ListNode } from "../linkedListCycle";

describe("hasCycle", () => {
  function createLinkedList(values: number[], pos: number): ListNode | null {
    if (values.length === 0) return null;

    const nodes: ListNode[] = values.map((val) => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
      (nodes[i] as ListNode).next = nodes[i + 1] as ListNode;
    }

    if (pos !== -1) {
      (nodes[nodes.length - 1] as ListNode).next = nodes[pos] as ListNode;
    }

    return nodes[0] as ListNode;
  }

  const testCases = [
    { values: [3, 2, 0, -4], pos: 1, expected: true },
    { values: [1, 2], pos: 0, expected: true },
    { values: [1], pos: -1, expected: false },
    { values: [], pos: -1, expected: false },
    { values: [1, 2, 3, 4, 5], pos: -1, expected: false },
    { values: [1, 2, 3, 4, 5], pos: 4, expected: true },
  ];

  test.each(testCases)(
    "hasCycle($values, pos=$pos) should return $expected",
    ({ values, pos, expected }) => {
      const head = createLinkedList(values, pos);
      expect(hasCycle(head)).toBe(expected);
    }
  );
});
