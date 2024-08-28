export default function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map<number, number>();
  const stack: number[] = [];

  for (const num of nums2) {
    while(stack.length && (stack.at(-1) ?? 0) < num) {
      map.set(stack.pop() ?? 0, num);
    } 
    stack.push(num);
  }

  const result: number[] = [];

  for (const num of nums1) {
    result.push(map.get(num) ?? -1);
  }

  return result;
};