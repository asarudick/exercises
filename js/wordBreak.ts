export function wordBreak(s: string, wordDict: string[]): boolean {
  let start = 0;
  let end = 1;
  let words = new Set<string>(wordDict);
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && words.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
