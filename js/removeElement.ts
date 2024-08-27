export default function removeElement(nums: number[], val: number): number {

  if (!nums.length) {
    return 0;
  }

  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {

      // i is last remaining element.
      if (i === nums.length - 1) {
        nums.pop();
        break;
      }

      // There's at least 2 elements.
      let detached = nums.pop();
      
      while (detached === val) {
        detached = nums.pop();
      }
      
      if (i >= nums.length) {
        nums.push(detached ?? 0);
        break;
      }

      nums[i] = detached ?? 0;
    }
    i++;
  }

  return i;
};