import defaultCmp from './lib/defaultComparator';

/**
 * Copies the given array, and returns it in sorted fashion using selection sort.
 *
 * Process for selection sort: The array is partitioned into 2 subarrays,
 * where initially the "sorted" subarray is comprised of zero elements, and the
 * unsorted subarray is the array given. The pointer i always points to the
 * first element in the unsorted subarray, and j scans the rest of the unsorted
 * to find the minimum element to swap with i. If none less than the element i
 * is found, no swap occurs. After this process, the element at index i becomes
 * the last element of the sorted subarray. This iterative process continues
 * until there is only one element left in the unsorted subarray, in which case
 * the remaining element is the minimum(no other element to compare against),
 * and is thusly deemed the end of the sorted subarray.
 *
 * @param  {Array}      arr     An array comprised of comparable elements.
 * @param  {Function}   cmp     The comparator to perform the comparison between elements in the array.
 * @return {Array}              The array in sorted fashion.
 */
export default function selectionSort (arr, cmp) {

    const result = Array.prototype.slice.call(arr);
    const comparator = cmp || defaultCmp;
    const length = result.length;

    for (let i = 0; i < length - 1; i++)
    {
        let minimumIndex = i;

        for (let j = i + 1; j < length; j++)
        {
            if (comparator(result[j], result[minimumIndex]) === -1) {
                minimumIndex = j;
            }
        }

        // Performing a swap at identical indexes leads to no change.
        if (minimumIndex !== i)
        {
            const swap = result[i];
            result[i] = result[minimumIndex];
            result[minimumIndex] = swap;
        }
    }

    return result;
}
