function swap<T>(arr: T[], i: number, j: number) {
  const tmp = arr[i] as T;
  arr[i] = arr[j] as T;
  arr[j] = tmp;
}
export default function nextPermutation(nums: number[]): void {
  if (!nums.length) {
    return;
  }
  let ascendingIndex = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    const element = nums[i] as number;
    const nextElement = nums[i + 1] as number;
    if (element < nextElement) {
      ascendingIndex = i;
      break;
    }
  }

  if (ascendingIndex === -1) {
    nums.reverse();
    return;
  }

  let lastGreaterIndex = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i] as number;
    if (element > (nums[ascendingIndex] as number)) {
      lastGreaterIndex = i;
      break;
    }
  }

  swap(nums, ascendingIndex, lastGreaterIndex);

  let i = ascendingIndex + 1;
  let j = nums.length - 1;

  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
