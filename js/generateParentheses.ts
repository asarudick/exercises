export default function generateParenthesis(n: number): string[] {
  if (n === 1) {
    return ['()'];
  }

  const results = generateParenthesis(n-1);
  const out = [];

  for (const result of results) {
    let right = result + '()';
    let left = '()' + result;
    out.push(right);
    if (right !== left) {
      out.push(left)
    }
    out.push('(' + result + ')');
  }

  return out;
};