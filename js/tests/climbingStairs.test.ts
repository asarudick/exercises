import { climbingStairs } from '../climbingStairs';

describe('climbingStairs', () => {
  it('1 => 1', () => {
    expect(climbingStairs(1)).toBe(1);
  });
  it('2 => 2', () => {
    expect(climbingStairs(2)).toBe(2);
  });
  it('3 => 3', () => {
    expect(climbingStairs(3)).toBe(3);
  });
  it('4 => 5', () => {
    expect(climbingStairs(4)).toBe(5);
  });
  it('5 => 8', () => {
    expect(climbingStairs(5)).toBe(8);
  });
});
