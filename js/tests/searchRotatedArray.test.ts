import searchRotatedArray from '../searchRotatedArray';

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
    arr: [1,2,3,4],
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
  {
    arr: [6,8,9,12,20],
    target: 9,
    index: 2
  },
  {
    arr: [3,1,2],
    target: 1,
    index: 1
  },
  {
    arr: [3,4,1,2],
    target: 1,
    index: 2
  },
  {
    arr: [3,4,5,1,2],
    target: 1,
    index: 3
  },
  {
    arr: [3,4,5,6,7,1,2],
    target: 1,
    index: 5
  },
];

describe.each(data)('searchRotatedArray', (test) => {
  it(`should return index ${test.index} for ${test.target} in ${test.arr}`, () => {
    expect(searchRotatedArray(test.arr, test.target)).toEqual(test.index);
  });
});
