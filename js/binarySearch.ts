export default function binarySearch(arr: number[], target: number): number {
  let [low, high] = [0, arr.length - 1];

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
