import findContiguousTargets from '../findContiguousTargets';

const provider = [
  {
    nums: [1],
    target: 1,
    result: [0, 0],
    description: 'should return [0, 0] when target is 1 in [1]'
  },
  {
    nums: [1, 2, 2, 3, 4, 5],
    target: 2,
    result: [1, 2],
    description: 'should return [1, 2] when target is 2 in [1, 2, 2, 3, 4, 5]'
  },
  {
    nums: [2, 2, 3, 4, 5],
    target: 2,
    result: [0, 1],
    description: 'should return [0, 1] when target is 2 in [2, 2, 3, 4, 5]'
  },
  {
    nums: [1, 2, 3, 4, 5, 5],
    target: 5,
    result: [4, 5],
    description: 'should return [4, 5] when target is 5 in [1, 2, 3, 4, 5, 5]'
  },
  {
    nums: [],
    target: 5,
    result: [-1, -1],
    description: 'should return [] when array is empty and target is 5'
  }
];

describe.each(provider)('findContiguousTargets', (test) => {
  it(test.description, () => {
    const result = findContiguousTargets(test.nums, test.target);
    expect(result).toEqual(test.result);
  });
});