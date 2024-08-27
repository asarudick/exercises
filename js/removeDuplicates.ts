export default function removeDuplicates(nums: number[]): number {

  if (nums.length < 2) {
    return nums.length;
  }

  let left = 0, right = 1;

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right] ?? 0;
    }
    right++;
  }

  return left + 1;
};