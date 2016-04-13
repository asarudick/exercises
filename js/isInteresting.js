export function isZeroes (number) {
    return /^[1-9]{1}0*$/.test(number);
}

export function isSameDigit (number) {
    return /^(\d){1}\1*$/.test(number);
}

export function isIncrementing (number) {
    return '1234567890'.indexOf(number) > -1;
}

export function isDecrementing (number) {
    return '9876543210'.indexOf(number) > -1;
}

export function isPalindrome (number) {
    const num = number.toString(10).split('');

    let start = 0,
        end = num.length - 1;

    while (end > start)
    {
        if (num[start] !== num[end])
        {
            return false;
        }
        end--;
        start++;
    }

    return true;
}

export function isInteresting (number, awesomePhrases) {
    const awesomes = awesomePhrases || [];

    const tests = [
        isZeroes,
        isSameDigit,
        isIncrementing,
        isDecrementing,
        isPalindrome,
        (n) => awesomes.indexOf(n) > -1
    ];

    let interesting = (number > 99 && tests.some((test) => test(number))) * 2;

    interesting = interesting || (number > 97 && tests.some((test) => test(number + 1) || test(number + 2))) * 1;

    return interesting;
}
