export default function isRegexMatch(s: string, p: string): boolean {
    const str = s.split('');
    const pattern = p.split('');
    let currentChar = 0;
    let currentPatternChar = 0;
    while (currentPatternChar < pattern.length && currentChar < str.length) {
        let char = str[currentChar];
        const patternChar = pattern[currentPatternChar];
        if (char === patternChar || patternChar === '.') {
            currentChar++;
            currentPatternChar++;
            continue;
        }

        if (patternChar === '*') {
            if (pattern[currentPatternChar - 1] === '.') {
                currentChar = str.length - 1;
                return true;
            }
            while (char === pattern[currentPatternChar - 1]) {
                char = str[++currentChar];
            }
            currentPatternChar++;
            continue;
        }

        return false;
    }
    return true;
}