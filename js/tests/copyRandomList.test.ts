import copyRandomList from "../copyRandomList";

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

function createLinkedListWithRandomPointers(
  values: number[],
  randomIndices: (number | null)[]
): _Node | null {
  if (values.length === 0) return null;

  const nodes = values.map((val) => new _Node(val));
  for (let i = 0; i < nodes.length; i++) {
    if (i < nodes.length - 1) {
      (nodes[i] as _Node).next = nodes[i + 1] as _Node;
    }
    if (randomIndices[i] !== null) {
      (nodes[i] as _Node).random = nodes[randomIndices[i] as number] as _Node;
    }
  }

  return nodes[0] as _Node;
}

function compareLinkedListsWithRandomPointers(
  head1: _Node | null,
  head2: _Node | null
): boolean {
  const map = new Map<_Node, _Node>();
  let current1 = head1;
  let current2 = head2;

  while (current1 && current2) {
    if (current1.val !== current2.val) return false;
    map.set(current1, current2);
    current1 = current1.next;
    current2 = current2.next;
  }

  if (current1 || current2) return false;

  current1 = head1;
  current2 = head2;

  while (current1 && current2) {
    if (current1.random && map.get(current1.random) !== current2.random)
      return false;
    if (!current1.random && current2.random) return false;
    current1 = current1.next;
    current2 = current2.next;
  }

  return true;
}

const testCases = [
  {
    values: [1, 2, 3],
    randomIndices: [null, 0, 1],
    description: "simple list with random pointers",
  },
  {
    values: [1, 2, 3, 4],
    randomIndices: [2, null, 1, 0],
    description: "list with complex random pointers",
  },
  {
    values: [],
    randomIndices: [],
    description: "empty list",
  },
  {
    values: [1],
    randomIndices: [null],
    description: "single node list without random pointer",
  },
  {
    values: [1],
    randomIndices: [0],
    description: "single node list with random pointer to itself",
  },
];

describe("copyRandomList", () => {
  test.each(testCases)(
    "given $description, returns a deep copy of the list",
    ({ values, randomIndices }) => {
      const head = createLinkedListWithRandomPointers(values, randomIndices);
      const copiedHead = copyRandomList(head);
      expect(compareLinkedListsWithRandomPointers(head, copiedHead)).toBe(true);
    }
  );
});
