export default function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  if (!matrix || !matrix.length) {
    return result;
  }

  let top = 0,
    left = 0,
    down = matrix.length - 1,
    right = matrix.at(0)?.length ?? 0 - 1;

  function outOfBounds(): boolean {
    return top > down || left > right;
  }

  while (true) {
    for (let i = left; i <= right; ++i) {
      result.push(matrix?.[top]?.[i] as number);
    }
    top++;
    if (outOfBounds()) {
      break;
    }
    for (let i = top; i <= down; ++i) {
      result.push(matrix?.[i]?.[right] as number);
    }
    right--;
    if (outOfBounds()) {
      break;
    }
    for (let i = right; i >= left; --i) {
      result.push(matrix?.[down]?.[i] as number);
    }
    down--;
    if (outOfBounds()) {
      break;
    }
    for (let i = down; i >= top; --i) {
      result.push(matrix?.[i]?.[left] as number);
    }
    left++;
    if (outOfBounds()) {
      break;
    }
  }

  return result;
}
