function isLeftDifferent(nums: number[], index: number) {
  return nums[index - 1] != nums[index];
}

function isRightDifferent(nums: number[], index: number) {
  return nums[index + 1] != nums[index];
}
export default function search(
  nums: number[],
  target: number,
  low: number = 0,
  high: number = nums.length - 1
) {
  let indexes = [-1, -1];

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let current = nums[mid] ?? -1;

    if (current === target) {
      const leftIsDifferent = isLeftDifferent(nums, mid);
      if (leftIsDifferent) {
        indexes[0] = mid;
        break;
      }
    }

    if (current >= target) {
      high = mid - 1;
    }

    if (current < target) {
      low = mid + 1;
    }
  }

  low = 0;
  high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let current = nums[mid] ?? -1;

    if (current === target) {
      const rightIsDifferent = isRightDifferent(nums, mid);
      if (rightIsDifferent) {
        indexes[1] = mid;
        break;
      }
    }

    if (current > target) {
      high = mid - 1;
    }

    if (current <= target) {
      low = mid + 1;
    }
  }

  return indexes;
}
