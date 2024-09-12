export default function maxProfit(prices: number[]): number {
  let i = 0;
  let acc = 0;
  for (let j = 1; j < prices.length; j++) {
    const income = prices[j]! - prices[i]!;
    if (income > 0) {
      acc += income;
    }
    i++;
  }

  return acc;
}
