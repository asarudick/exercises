import binarySearch from '../binarySearch';

const data = [
  {
    arr: [1],
    target: 1,
    index: 0
  },
  {
    arr: [1,2],
    target: 1,
    index: 0
  },
  {
    arr: [1,2],
    target: 2,
    index: 1
  },
  {
    arr: [1,2,3],
    target: 2,
    index: 1
  },
  {
    arr: [1,2,3],
    target: 3,
    index: 2
  },
  {
    arr: [1,2,3,4,5],
    target: 3,
    index: 2
  },
  {
    arr: [1,2,3,4,5],
    target: 0,
    index: -1
  },
];

describe.each(data)('binarySearch', (test) => {
  it(`should return index ${test.index} for ${test.target} in ${test.arr}`, () => {
    expect(binarySearch(test.arr, test.target)).toEqual(test.index);
  });
});
