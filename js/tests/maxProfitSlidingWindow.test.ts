import maxProfitSlidingWindow from "../maxProfitSlidingWindow";

const testCases = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    expected: 5, // Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5
  },
  {
    prices: [7, 6, 4, 3, 1],
    expected: 0, // No transactions are done, i.e. max profit = 0
  },
  {
    prices: [1, 2, 3, 4, 5],
    expected: 4, // Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4
  },
  {
    prices: [3, 3, 5, 0, 0, 3, 1, 4],
    expected: 4, // Buy on day 4 (price = 0) and sell on day 8 (price = 4), profit = 4-0 = 4
  },
  {
    prices: [],
    expected: 0, // No prices available, max profit = 0
  },
];

describe("maxProfit", () => {
  test.each(testCases)(
    "given prices $prices, returns $expected",
    ({ prices, expected }) => {
      expect(maxProfitSlidingWindow(prices)).toEqual(expected);
    }
  );
});
