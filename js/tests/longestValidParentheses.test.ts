import longestValidParentheses from '../longestValidParentheses';
const provider = [
  {
    s: '',
    result: 0
  },
  {
    s: '(',
    result: 0
  },
  {
    s: ')',
    result: 0
  },
  {
    s: ')(',
    result: 0
  },
  {
    s: '()',
    result: 2
  }, 
  {
    s: '()(()',
    result: 2
  },   
  {
    s: ')()())',
    result: 4
  },   
];
describe.each(provider)('longestValidParentheses', (test) => {
  it(`should return ${test.result} for ${test.s}`, () => {
    expect(longestValidParentheses(test.s)).toEqual(test.result);
  });
});
