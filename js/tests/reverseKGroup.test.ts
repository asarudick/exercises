import ListNode, { arrayToList, listToArray } from '../lib/ListNode';
import reverseKGroup from '../reverseKGroup';

describe('reverseKGroup', () => {
  it('[], 2 => []', () => {
    const list: number[] | null = [];
    const expected: number[] | null = [];
    const k = 2;
    const actual = listToArray(reverseKGroup(arrayToList(list), k));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3,4,5], 2 => [2,1,4,3,5]', () => {
    const list: number[] | null = [1,2,3,4,5];
    const expected: number[] | null = [2,1,4,3,5];
    const k = 2;
    const actual = listToArray(reverseKGroup(arrayToList(list), k));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3,4,5], 3 => [3,2,1,4,5]', () => {
    const list: number[] | null = [1,2,3,4,5];
    const expected: number[] | null = [3,2,1,4,5];
    const k = 3;
    const actual = listToArray(reverseKGroup(arrayToList(list), k));
    expect(actual).toEqual(expected);
  });
});
