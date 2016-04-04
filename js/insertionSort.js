import defaultCmp from './lib/defaultComparator';

export default function insertionSort (arr, cmp) {
    const result = Array.prototype.slice.call(arr);
    const comparator = cmp || defaultCmp;
    const length = result.length;

    for (let i = 0; i < length; i++)
    {
        let j = i;

        while (j > 0 && comparator(result[j - 1], result[j]) === 1)
        {
            const swap = result[j - 1];
            result[j - 1] = result[j];
            result[j] = swap;
            j--;
        }
    }

    return result;
}
