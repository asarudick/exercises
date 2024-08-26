const map = new Map<number, number>();

export function climbingStairs(n: number): number {
  if (n < 3) {
    return n;
  }

  const cache = map.get(n);

  if (cache === undefined) {
    const result = climbingStairs(n - 2) + climbingStairs(n - 1);
    map.set(n, result);
    return result;
  }

  return cache;
}
