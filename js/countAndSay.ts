function runLengthEncoding(str: string): string {
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    let count = 1;
    while (str.at(i) === str.at(j)) {
      count++;
      j++;
      i++;
    }
    result.push(count.toString(), str.at(i) as string);
  }
  return result.join("");
}
export default function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }

  return runLengthEncoding(countAndSay(n - 1));
}
