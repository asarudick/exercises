export default function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const results: number[][] = [];
  const current: number[] = [];

  candidates.sort((a, b) => a - b);

  const dfs = (i: number, rem: number) => {
    if (rem === 0) {
      results.push(Array.from(current));
      return;
    }

    if (rem < 0) {
      return;
    }

    if (i >= candidates.length || rem < (candidates[i] as number)) {
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j] as number;
      if (j > i && candidate === candidates[j - 1]) {
        continue;
      }
      current.push(candidate);
      dfs(j + 1, rem - candidate);
      current.pop();
    }
  };
  dfs(0, target);
  return results;
}
