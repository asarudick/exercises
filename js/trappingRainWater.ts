export default function trap(height: number[]): number {
  if (!height.length) {
    return 0;
  }

  let i = 0,
    j = height.length - 1,
    leftMax = height[0] as number,
    rightMax = height.at(j) as number;
  let sum = 0;

  while (i < j) {
    if (leftMax <= rightMax) {
      sum += leftMax - (height[i] as number);
      i++;
      leftMax = Math.max(leftMax, height[i] as number);
      continue;
    }

    sum += rightMax - (height.at(j) as number);
    j--;
    rightMax = Math.max(rightMax, height.at(j) as number);
  }
  return sum;
}
