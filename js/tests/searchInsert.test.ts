import searchInsert from '../searchInsert';

const provider = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
    result: 2,
    description: 'should return 2 when target 5 is found in [1, 3, 5, 6]'
  },
  {
    nums: [1, 3, 5, 6],
    target: 1,
    result: 0,
    description: 'should return 0 when target 1 is found in [1, 3, 5, 6]'
  },
  {
    nums: [1, 3, 5, 6],
    target: 6,
    result: 3,
    description: 'should return 3 when target 6 is found in [1, 3, 5, 6]'
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    result: 1,
    description: 'should return 1 when target 2 is not found in [1, 3, 5, 6]'
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    result: 0,
    description: 'should return 0 when target 0 is not found in [1, 3, 5, 6]'
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
    result: 4,
    description: 'should return 4 when target 7 is not found in [1, 3, 5, 6]'
  },
  {
    nums: [1],
    target: 0,
    result: 0,
    description: 'should return -1 when target 0 is not found in [1]'
  }
];

describe.each(provider)('searchInsert', (test) => {
  it(test.description, () => {
    const result = searchInsert(test.nums, test.target);
    expect(result).toBe(test.result);
  });
});