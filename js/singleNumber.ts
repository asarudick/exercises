export default function singleNumber(nums: number[]): number {
  return nums.reduce((a, v) => a ^ v, 0);
}
