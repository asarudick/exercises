export default function longestValidParentheses(s: string): number {
    let maxSoFar = 0;
    let length = 0;
    let stack: number[] = [-1];

    for (let i = 0; i < s.length; i++) {
      const char = s.at(i);

      if (char === '(') {
        stack.push(i);
        continue;
      }

      stack.pop();

      if (stack.length) {
        maxSoFar = Math.max(maxSoFar, i - (stack.at(-1) ?? 0));
      }
      else {
        stack.push(i);
      }
      
    }

    return maxSoFar;
};