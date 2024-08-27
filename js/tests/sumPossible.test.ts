import sumPossible from '../sumPossible';

describe('sumPossible', () => {
  it('[], 0 => true', () => {
    expect(sumPossible(0, [])).toEqual(true);
  });
  it('[1], 1 => true', () => {
    expect(sumPossible(1, [1])).toEqual(true);
  });
  it('[2], 1 => false', () => {
    expect(sumPossible(1, [2])).toEqual(false);
  });
  it('[1, 2], 1 => true', () => {
    expect(sumPossible(1, [1,2])).toEqual(true);
  });
  it('[10, 6, 4], 15 => false', () => {
    expect(sumPossible(15, [10,6,4])).toEqual(false);
  });
  it('[10, 6, 4], 14 => true', () => {
    expect(sumPossible(14, [10,6,4])).toEqual(true);
  });
});
