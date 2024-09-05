function combinationSumRecurse(
  candidates: number[],
  target: number,
  current: number[],
  results: number[][],
  rem: number,
  start: number = 0,
  used: boolean[]
) {
  if (rem === 0) {
    results.push(Array.from(current));
    return;
  }

  if (rem < (candidates[start] as number)) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
      continue;
    }
    used[i] = true;
    current.push(candidates[i] as number);
    rem -= candidates[i] as number;
    combinationSumRecurse(candidates, target, current, results, rem, i, used);
    used[i] = false;
    rem += current.pop() as number;
  }
}

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
      dfs(j, rem - candidate);
      current.pop();
    }
  };
  dfs(0, target);
  return results;
}
