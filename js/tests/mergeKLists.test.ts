import mergeKLists from '../mergeKLists';
import ListNode, {arrayToList, listToArray} from '../lib/ListNode';

describe('mergeKLists', () => {
	test('[1], [2] -> [1,2]', () => {
		const result = mergeKLists([arrayToList([1]), arrayToList([2])].filter(i => i != null));
        expect(listToArray(result)).toEqual([1,2]);
	});
	test('[1], [2], [3] -> [1,2,3]', () => {
		const list1 = arrayToList([1]);
		const lists = [arrayToList([1]), arrayToList([2]), arrayToList([3])].filter(i => i != null);
		const result = mergeKLists([arrayToList([1]), arrayToList([2]), arrayToList([3])].filter(i => i != null));
        expect(listToArray(result)).toEqual([1,2,3]);
	});
	test('[1], [2], [3], [4] -> [1,2,3,4]', () => {
		const result = mergeKLists([arrayToList([1]), arrayToList([2]), arrayToList([3]), arrayToList([4])].filter(i => i != null));
        expect(listToArray(result)).toEqual([1,2,3,4]);
	});
	test('[1,4,5], [1,3,4] -> [1,1,3,4,4,5]', () => {
		const result = mergeKLists([arrayToList([1,4,5]), arrayToList([1,3,4])].filter(i => i != null));
		const out = listToArray(result);
        expect(listToArray(result)).toEqual([1,1,3,4,4,5]);
	});
	test('[1,4,5],[1,3,4],[2,6] -> [1,1,2,3,4,4,5,6]', () => {
		const result = mergeKLists([arrayToList([1,4,5]), arrayToList([1,3,4]), arrayToList([2,6])].filter(i => i != null));
		const out = listToArray(result);
        expect(listToArray(result)).toEqual([1,1,2,3,4,4,5,6]);
	});
});
