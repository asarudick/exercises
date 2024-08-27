import removeElement from '../removeElement';

describe('removeElement', () => {
  it('[1], 2 => [1], 1', () => {
    const expected = {a: [1], n: 1};
    const input = {a: [1], r: 2};
    expect(removeElement(input.a, input.r)).toEqual(expected.n);
    expect(input.a).toEqual(expected.a);
  });
  it('[1,2], 2 => [1], 1', () => {
    const input = {a: [1,2], r: 2};
    const expected = {a: [1], n: 1};
    expect(removeElement(input.a, input.r)).toEqual(expected.n);
    expect(input.a).toEqual(expected.a);
  });
  it('[1,2,3], 2 => [1,3], 2', () => {
    const input = {a: [1,2,3], r: 2};
    const expected = {a: [1,3], n: 2};
    const result = removeElement(input.a, input.r);
    expect(result).toEqual(expected.n);
    expect(input.a).toEqual(expected.a);
  });
  it('[2,3,3], 3 => [2], 1', () => {
    const input = {a: [2,3,3], r: 3};
    const expected = {a: [2], n: 1};
    const result = removeElement(input.a, input.r);
    expect(result).toEqual(expected.n);
    expect(input.a).toEqual(expected.a);
  });
});
