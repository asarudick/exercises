
const numerals: { [index: string]: number } = {
  I: 1,
  V: 2,
  X: 3,
  L: 4,
  C: 5,
  D: 6,
  M: 7,
};
const numeralValues: { [index: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default function romanToInt(s: string): number {
  const str = s.split("");
  let total = 0;
  let i = 0;
  while (i < str.length) {
    const currentChar = str[i] ?? "";
    const nextChar = str[i + 1] ?? "";
    const currentNumeral = numerals[currentChar] ?? 0;
    const nextNumeral = numerals[nextChar] ?? 0;
    if (
      nextNumeral &&
      (currentNumeral ?? 0) % 2 === 1 &&
      (currentNumeral + 1 === nextNumeral || currentNumeral + 2 === nextNumeral)
    ) {
      total +=
        (numeralValues[nextChar] ?? 0) - (numeralValues[currentChar] ?? 0);
      i += 2;
      continue;
    }
    let multiplier = 0;

    while (str[i] === currentChar) {
        i++;
        multiplier++;
    }

    total += (numeralValues[currentChar] ?? 0) * multiplier;
  }

  return total;
}
