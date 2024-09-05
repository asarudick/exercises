function permuteRecurse(
  nums: number[],
  current: number[],
  used: boolean[],
  results: number[][]
) {
  if (current.length === nums.length) {
    results.push(Array.from(current));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }
      used[i] = true;
      current.push(nums[i] ?? -1);
      permuteRecurse(nums, current, used, results);
      used[i] = false;
      current.pop();
    }
  }
}
export default function permuteUnique(nums: number[]): number[][] {
  const results: number[][] = [];
  nums.sort((a, b) => a - b);
  permuteRecurse(nums, [], [], results);
  return results;
}
