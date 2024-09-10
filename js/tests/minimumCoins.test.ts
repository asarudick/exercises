import minimumCoins from "../minimumCoins";

const testCases = [
  {
    coins: [1, 2, 5],
    amount: 11,
    expected: 3, // 11 = 5 + 5 + 1
  },
  {
    coins: [1],
    amount: 0,
    expected: 0, // No coins needed to make amount 0
  },
  {
    coins: [1],
    amount: 1,
    expected: 1, // 1 = 1
  },
  {
    coins: [1],
    amount: 2,
    expected: 2, // 2 = 1 + 1
  },
  {
    coins: [1, 2, 5],
    amount: 7,
    expected: 2, // 7 = 5 + 2
  },
];

describe("minimumCoins", () => {
  test.each(testCases)(
    "given coins $coins and amount $amount, returns $expected",
    ({ coins, amount, expected }) => {
      expect(minimumCoins(coins, amount)).toEqual(expected);
    }
  );
});
