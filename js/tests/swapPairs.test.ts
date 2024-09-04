import { arrayToList, listToArray } from '../lib/ListNode';
import swapPairs from '../swapPairs';

describe('swapPairs', () => {
  it('[] => null', () => {
    expect(swapPairs(null)).toBeNull();
  });
  it('[1] => [1]', () => {
    expect(listToArray(swapPairs(arrayToList([1])))).toEqual([1]);
  });
  it('[1,2] => [2,1]', () => {
    const list = [1,2];
    const expected = [2,1];
    const actual = listToArray(swapPairs(arrayToList(list)));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3] => [2,1,3]', () => {
    const list = [1,2,3];
    const expected = [2,1,3];
    const actual = listToArray(swapPairs(arrayToList(list)));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3,4] => [2,1,4,3]', () => {
    const list = [1,2,3,4];
    const expected = [2,1,4,3];
    const actual = listToArray(swapPairs(arrayToList(list)));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3,4,5] => [2,1,4,3,5]', () => {
    const list = [1,2,3,4,5];
    const expected = [2,1,4,3,5];
    const actual = listToArray(swapPairs(arrayToList(list)));
    expect(actual).toEqual(expected);
  });
  it('[1,2,3,4,5,6] => [2,1,4,3,6,5]', () => {
    const list = [1,2,3,4,5,6];
    const expected = [2,1,4,3,6,5];
    const actual = listToArray(swapPairs(arrayToList(list)));
    expect(actual).toEqual(expected);
  });
});
