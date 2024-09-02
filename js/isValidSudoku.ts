function rowKey(num: number, row: number) {
    return num + ' row ' + row;
}
function columnKey(num: number, col: number) {
    return num + ' column ' + col;
}
function blockKey(num: number, row: number, col: number) {
    return num + ' block ' + Math.floor(row/3) + '+' + Math.floor(col/3);
}
export default function isValidSudoku(board: string[][]): boolean {
    const seen: Set<string> = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const n = (board[i]?.[j] ?? '');
            if (n === '.') {
                continue;
            }
            const num = parseInt(n);
            const seenRow = seen.has(rowKey(num, i));
            const seenColumn = seen.has(columnKey(num, j));
            const seenBlock = seen.has(blockKey(num, i, j));
            if (seenRow || seenColumn || seenBlock) {
                return false;
            }
            !seenRow && seen.add(rowKey(num, i));
            !seenRow && seen.add(columnKey(num, j));
            !seenBlock && seen.add(blockKey(num, i, j));
        }
        
    }
    return true;
};