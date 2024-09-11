export default function wordBreak(
  s: string,
  wordDict: string[],
  start = 0,
  end = 1
): string[] {
  const words = new Set(wordDict);
  const memo = new Map<number, string[][]>();

  function recurse(start: number, end: number) {
    let results: string[][] = [];

    if (memo.has(start)) {
      return memo.get(start) as string[][];
    }

    if (start === end) {
      return results;
    }

    while (end <= s.length) {
      // Get potential word, and increment early.
      const word = s.slice(start, end);

      // Abort if we did not find a word.
      if (!words.has(word)) {
        end++;
        continue;
      }

      // Found word, let's get the results from the rest of the string.
      let subresults = recurse(end, end + 1);

      // Append results with the word we found.
      results = results.concat(subresults.map((r) => [word, ...r]));

      // Ambiguous return value. Can either be end of string, or no matches.
      if (!subresults.length) {
        // Attempted to match but word was empty.
        if (end + 1 > s.length) {
          results.push([word]);
        }
      }
      end++;
    }

    memo.set(start, results);
    return results;
  }

  return recurse(start, end).map((i) => i.join(" "));
}
