import countAndSay from "../countAndSay";

const testCases = [
  {
    n: 1,
    expected: "1",
  },
  {
    n: 2,
    expected: "11",
  },
  {
    n: 3,
    expected: "21",
  },
  {
    n: 4,
    expected: "1211",
  },
  {
    n: 5,
    expected: "111221",
  },
  {
    n: 6,
    expected: "312211",
  },
];

describe("countAndSay", () => {
  test.each(testCases)("given n $n, returns $expected", ({ n, expected }) => {
    expect(countAndSay(n)).toEqual(expected);
  });
});
