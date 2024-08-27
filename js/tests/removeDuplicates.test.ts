import removeDuplicates from '../removeDuplicates';

describe('removeDuplicates', () => {
  it('[] => 0', () => {
    expect(removeDuplicates([])).toBe(0);
  });
  it('[1] => 1', () => {
    expect(removeDuplicates([1])).toBe(1);
  });
  it('[1,2] => 2', () => {
    expect(removeDuplicates([1,2])).toBe(2);
  });
  it('[1,1] => 1', () => {
    expect(removeDuplicates([1,1])).toBe(1);
  });
  it('[1,1,2] => 2', () => {
    expect(removeDuplicates([1,1,2])).toBe(2);
  });
  it('[0,0,1,1,1,2,2,3,3,4] => 5', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  });
});
