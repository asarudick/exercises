const numerals = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ];

function getRoman(digit: number, place: number): string {
    if (digit === 0) {
        return '';
    }

    const numeral = place;

    if (digit === 4) {
        return numerals[numeral] + (numerals[numeral + 1] ?? '');
    }

    if (digit === 9) {
        return numerals[numeral] + (numerals[numeral + 2] ?? '');
    }

    let str = '';

    if (digit >= 5) {
        str = numerals[numeral + 1] ?? '';
    }

    str += numerals[numeral]?.repeat(digit % 5);

    return str;
}

export default function intToRoman(num: number): string {
    const sign = num < 0 ? -1 : 1;
    const str = Math.abs(num).toString().split('').reverse();
    const roman = [];
    let place = 0;
    
    for (const char of str) {
        const digit = parseInt(char, 10);
        roman.push(getRoman(digit, place));
        place += 2;
    }

    return roman.reverse().join('');
};