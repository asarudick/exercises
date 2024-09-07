export default function canJump(nums: number[]): boolean {
  if (nums.length <= 1) {
    return true;
  }
  let lastJump = nums.length - 1;

  let i = lastJump;

  while (i > 0) {
    if ((nums[i] as number) >= lastJump - i) {
      lastJump = i;
    }
    i--;
  }

  return (nums[i] as number) >= lastJump;
}
