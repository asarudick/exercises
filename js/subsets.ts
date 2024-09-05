export default function subsets(nums: number[]): number[][] {
  const results: number[][] = [];
  nums.sort((a, b) => a - b);
  const dfs = (current: number[], i: number) => {
    if (current.length > nums.length) {
      return;
    }

    results.push(Array.from(current));

    if (current.length === nums.length) {
      return;
    }

    for (let j = i; j < nums.length; j++) {
      if (j > i && nums[j] === nums[j - 1]) {
        continue;
      }
      current.push(nums[j] as number);
      dfs(current, j + 1);
      current.pop();
    }
  };
  dfs([], 0);
  return results;
}
