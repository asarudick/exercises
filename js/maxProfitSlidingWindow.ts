export default function maxProfitSlidingWindow(prices: number[]): number {
  let l = 0,
    r = 1;
  let max = 0;
  while (r < prices.length) {
    if (prices[r]! < prices[l]!) {
      l = r;
    }
    max = Math.max(max, prices[r]! - prices[l]!);
    r++;
  }

  return max;
}
