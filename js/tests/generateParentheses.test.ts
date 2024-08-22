import generateParentheses from "../generateParentheses";

describe("generateParentheses", () => {
  test("1 -> [()]", () => {
    const result = generateParentheses(1);
    expect(result).toEqual(["()"]);
  });
  test("2 -> [()(), (())]", () => {
    const result = generateParentheses(2);
    expect(result).toEqual(["()()", "(())"]);
  });
  test("3 -> [()()(), ((())), ]", () => {
    const result = generateParentheses(3);
    expect(result).toEqual(["()()()", "(()())", "(())()", "()(())", "((()))"]);
  });
});
