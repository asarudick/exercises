import maxProfit from "../maxProfitII";

const testCases = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    expected: 7, // Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4
    // Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3
    // Total profit = 4 + 3 = 7
  },
  {
    prices: [1, 2, 3, 4, 5],
    expected: 4, // Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4
  },
  {
    prices: [7, 6, 4, 3, 1],
    expected: 0, // No transactions are done, i.e. max profit = 0
  },
  {
    prices: [1, 2, 3, 0, 2, 3, 1, 4],
    expected: 8, // Buy on day 1 (price = 1) and sell on day 3 (price = 3), profit = 3-1 = 2
    // Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3
    // Buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3
    // Total profit = 2 + 3 + 3 = 8
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
      expect(maxProfit(prices)).toEqual(expected);
    }
  );
});
