function isRotated(nums: number[], start: number, end: number): boolean {
  return (nums.at(start) ?? 0) > (nums.at(end) ?? 0);
}

function binarySearch(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if ((arr[mid] ?? Infinity) < target) {
      low = mid + 1;
      continue;
    }

    high = mid -1;
  }

  return -1;
}

export default function search(nums: number[], target: number): number {
    let result = -1;

    if (!nums.length) {
      return -1;
    }

    let [low, high] = [0, nums.length - 1];

    while (low <= high) {
      
      // If not rotated, perform binary search to find index.
      if (!isRotated(nums, low, high)) {
        return binarySearch(nums, target, low, high);  
      }

      // Split into 2.
      let mid = Math.floor((low + high)/2);

      // Determine which segment to search.
      let firstSegmentRotated = isRotated(nums, low, mid);
      let secondSegmentRotated = isRotated(nums, mid + 1, high);

      if (!firstSegmentRotated && !secondSegmentRotated) {
        if (target >= (nums[low] ?? 0) && target <= (nums[mid] ?? 0)) {
          return binarySearch(nums, target, low, mid);
        }
        if (target >= (nums[mid+1] ?? 0) && target <= (nums[high] ?? 0)) {
          return binarySearch(nums, target, mid+1, high);
        }

        return -1;
      }
  
      // First segment is not rotated, thus the second one is.
      if (!firstSegmentRotated)  {
        if (target >= (nums[low] ?? 0) && target <= (nums[mid] ?? 0)) {
          return binarySearch(nums, target, low, mid);
        }
        low = mid + 1;
        continue;
      }

      // Second segment is not rotated, so search it.
      if (target >= (nums[mid+1] ?? 0) && target <= (nums[high] ?? 0)) {
        return binarySearch(nums, target, mid+1, high);
      }

      high = mid;
    }

    return result;
};

