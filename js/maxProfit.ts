export default function maxProfit(prices: number[]): number {
  let low = Infinity;
  let max = 0;

  for (const price of prices) {
    low = Math.min(low, price);
    max = Math.max(max, price - low);
  }

  return max;
}
