import trappingRainWater from '../trappingRainWater';

describe('trappingRainWater', () => {
  it('should return 6 for heights [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });

  it('should return 9 for heights [4,2,0,3,2,5]', () => {
    expect(trappingRainWater([4,2,0,3,2,5])).toBe(9);
  });

  it('should return 0 for heights [1,2,3,4,5]', () => {
    expect(trappingRainWater([1,2,3,4,5])).toBe(0);
  });

  it('should return 0 for heights []', () => {
    expect(trappingRainWater([])).toBe(0);
  });

  it('should return 0 for heights [5,4,3,2,1]', () => {
    expect(trappingRainWater([5,4,3,2,1])).toBe(0);
  });
});
