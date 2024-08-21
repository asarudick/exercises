export default function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b) => a - b);

    let closestDistance = Infinity;
    let closestSum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let [left, right] = [i + 1, nums.length - 1];
        
        while (left < right) {
            const leftValue =  (nums[left] ?? 0);
            const rightValue = (nums[right] ?? 0); 
            const sum = leftValue + rightValue + (nums[i] ?? 0);
    
            if (sum === target) {
                return sum;
            }
            
            if (sum > target) {
                right--;
            }
            else if (sum < target) {
                left++;
            }

            const distance = Math.abs(sum - target);

            if (closestDistance > distance) {
                closestDistance = distance;
                closestSum = sum;
            }
        }
    }

    return closestSum;
}