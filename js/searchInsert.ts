export default function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;


  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < (nums[mid] ?? Infinity)) {
      high = mid - 1;
      continue;
    }

    low = mid + 1;
  }

  return low;
}
