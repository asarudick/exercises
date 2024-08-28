import nextGreaterElement from '../nextGreaterElement';

const provider = [
  {
    nums1: [4, 1, 2],
    nums2: [1, 3, 4, 2],
    result: [-1, 3, -1]
  },
  {
    nums1: [2, 4],
    nums2: [1, 2, 3, 4],
    result: [3, -1]
  },
  {
    nums1: [1, 2, 3],
    nums2: [3, 2, 1],
    result: [-1, -1, -1]
  },
  {
    nums1: [1, 2, 3, 4, 5],
    nums2: [5, 4, 3, 2, 1],
    result: [-1, -1, -1, -1, -1]
  }
];

describe.each(provider)('nextGreaterElement', (test) => {
  it(`should return ${JSON.stringify(test.result)} for nums1: ${JSON.stringify(test.nums1)} and nums2: ${JSON.stringify(test.nums2)}`, () => {
    const result = nextGreaterElement(test.nums1, test.nums2);
    expect(result).toEqual(test.result);
  });
});