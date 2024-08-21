export default function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    if (nums.length < 3) {
        return result;
    }

    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != null && nums[i] === nums[i-1]) {
            i++;
        }
        const target = -(nums[i] ?? 0);
        let [left, right] = [i + 1, nums.length - 1];
        
        while (left < right) {
            const leftValue =  (nums[left] ?? 0);
            const rightValue = (nums[right] ?? 0); 
            const sum = leftValue + rightValue;
    
            if (sum === target) {
                result.push([-target, leftValue, rightValue]);
                while (nums[left] === nums[left+1]) {
                    left++;
                }
                left++;
                while (nums[right] === nums[right-1]) {
                    right--;
                }
                right--;
            }
            else if (sum > target) {
                while (nums[right] === nums[right-1]) {
                    right--;
                }
                right--;
            }
            else if (sum < target) {
                while (nums[left] === nums[left+1]) {
                    left++;
                }
                left++;
            }
        }
    }

    return result;
}