export default class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function arrayToList(arr: number[]): ListNode | null | undefined  {
	let sentinel = new ListNode();
	let result = sentinel;
	while (arr.length) {
		const current = arr.shift();
		result.next = new ListNode(current);
		result = result.next;
	}

	return sentinel.next;
}
export function listToArray(list: ListNode | null | undefined): number[] {
	let current: ListNode | null | undefined = list;
	let result = [];
	while (current) {
		result.push(current.val);
		current = current.next;
	}

	return result;
}