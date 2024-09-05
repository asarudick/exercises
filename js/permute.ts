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
      used[i] = true;
      current.push(nums[i] ?? -1);
      permuteRecurse(nums, current, used, results);
      used[i] = false;
      current.pop();
    }
  }
}
export default function permute(nums: number[]): number[][] {
  const results: number[][] = [];
  permuteRecurse(nums, [], [], results);
  return results;
}
