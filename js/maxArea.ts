export default function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const leftHeight = height[left] ?? 0;
        const rightHeight = height[right] ?? 0;
        max = Math.max(max, Math.min(leftHeight, rightHeight) * (right - left));

        if (leftHeight < rightHeight) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}