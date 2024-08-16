enum Direction {
    Down,
    Diagonal
}
export default function convert(s: string, numRows: number): string {
    let c = 0;
    let r = 0;
    let direction = Direction.Down;
    let str: string[] = s.split('');
    let result = [];

    while (str.length) {
        let currentColumn: string[] = [];

        if (direction === Direction.Down) {
            currentColumn = [...str.splice(0, numRows)];
            c++;
            result.push(currentColumn);
            r = numRows - 2;
            if (numRows > 2) {
                direction = Direction.Diagonal;
            }
            continue;
        }

        if (direction === Direction.Diagonal) {
            for (let i = 0; i < numRows; i++) {
                if (i === r) {
                    currentColumn.push(str.shift() ?? '');
                    continue;
                }
                currentColumn.push('');
            }
            c++;
            result.push(currentColumn);
            r--;
            if (r <= 0) {
                r = 0;
                direction = Direction.Down;
            }
            continue;
        }
    }

    let out = [];
    for (let j = 0; j < numRows; j++) {
        for (const column of result) {
            const char = column[j];
            if (!char) {
                continue;
            }
            out.push(char);
        }
    }
    return out.join('');
};
