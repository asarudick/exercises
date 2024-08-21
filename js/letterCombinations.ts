const digitMap: {[index: number]: string} = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

export default function letterCombinations(digits: string): string[] {
    if (digits.length > 4) {
        return [];
    }

    let last = [''];
    const letterMap = digits.split('').map(e => digitMap[parseInt(e, 10)]);

    while (letterMap.length) {
        const current = letterMap.shift() ?? '';
        let result = [];

        for (const otherLetter of last) {
            for (const letter of current) {
                result.push(otherLetter + letter);
            }
        }

        last = result ?? [];
    }

    if (last.length == 1 && last[0] === '') {
        return [];
    }

    return last;
}