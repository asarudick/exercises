export default function sumPossible(sum: number, nums: number[], map: Map<number, boolean> = new Map()): boolean {

  if (sum < 0) {
    return false;
  }
  
  if (sum === 0) {
    return true;
  }

  if (map.has(sum)) {
    return map.get(sum) ?? false;
  }

  const results = [];

  for (const num of nums) {
    results.push(sumPossible(sum - num, nums, map));
  }

  const result = results.some(v => v === true);

  map.set(sum, result);
  
  return result;
}
