function combinationSumRecurse(
  candidates: number[],
  target: number,
  current: number[],
  results: number[][],
  sum: number,
  start: number = 0
) {
  if (sum > target) {
    return;
  }

  if (sum === target) {
    results.push(Array.from(current));
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    current.push(candidates[i] as number);
    sum += candidates[i] as number;
    combinationSumRecurse(candidates, target, current, results, sum, i);
    sum -= current.pop() as number;
  }
}

export default function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const results: number[][] = [];
  combinationSumRecurse(candidates, target, [], results, 0);
  return results;
}
