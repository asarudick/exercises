export default function minimumCoins(coins: number[], value: number): number {
  const cache = new Map<number, number>();
  function recurse(coins: number[], value: number): number {
    if (value === 0 || !coins.length) {
      return 0;
    }

    if (cache.has(value)) {
      return cache.get(value) as number;
    }

    let minimum = Infinity;

    for (const coin of coins) {
      if (coin > value) {
        continue;
      }
      minimum = Math.min(minimum, minimumCoins(coins, value - coin) + 1);
    }

    cache.set(value, minimum);

    return minimum;
  }

  return recurse(coins, value);
}
