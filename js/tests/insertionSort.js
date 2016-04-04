import insertionSort from '../insertionSort';
import assert from 'assert';

describe('insertionSort', () => {
        it('should sort [] into []', () => {
            const arr = [ ];
            const result = insertionSort(arr);
            assert.deepEqual(result, [ ]);
        });
        it('should sort [1] into [1]', () => {
            const arr = [ 1 ];
            const result = insertionSort(arr);
            assert.deepEqual(result, [ 1 ]);
        });
        it('should sort [2,1] into [1,2]', () => {
            const arr = [ 2, 1 ];
            const result = insertionSort(arr);
            assert.deepEqual(result, [ 1, 2 ]);
        });
        it('should sort [3,2,1] into [1,2,3]', () => {
            const arr = [ 3, 2, 1 ];
            const result = insertionSort(arr);
            assert.deepEqual(result, [ 1, 2, 3 ]);
        });
        it('should sort [15,10,5] into [5,10,15]', () => {
            const arr = [ 15, 10, 5 ];
            const result = insertionSort(arr);
            assert.deepEqual(result, [ 5, 10, 15 ]);
        });
        it('should use user-defined comparator and sort [ {i: 15}, {i: 10}, {i:5} ] into [ {i: 5}, {i: 10}, {i:15} ]', () => {
            const arr = [ {i: 15}, {i: 10}, {i: 5} ];
            const comparator = (a, b) => {
                if (a.i < b.i)
                {
                    return -1;
                }
                if (a.i > b.i)
                {
                    return 1;
                }
                return 0;
            };
            const result = insertionSort(arr, comparator);
            assert.deepEqual(result, [ {i: 5}, {i: 10}, {i: 15} ]);
        });
});
