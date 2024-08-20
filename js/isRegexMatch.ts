export default function isRegexMatch(s: string, p: string): boolean {
    const str = s.split('');
    const pattern = p.split('');
    let currentChar = 0;
    let currentPatternChar = 0;
    while (currentPatternChar < pattern.length && currentChar < str.length) {
        let char = str[currentChar];
        const patternChar = pattern[currentPatternChar];
        
        if (pattern[currentPatternChar + 1] === '*') {
            currentPatternChar++;
            continue;
        }

        if (patternChar === '.') {
            currentChar++;
            currentPatternChar++;
            continue;
        }

        if (patternChar === char) {
            currentChar++;
            currentPatternChar++;
            continue;
        }

        if (patternChar === '*') {
            const prevPatternChar = pattern[currentPatternChar - 1];
            const nextPatternChar = pattern[currentPatternChar + 1];
            if (prevPatternChar === '.') {
                currentChar = str.length;
                currentPatternChar++;
                return currentChar === str.length && currentPatternChar === pattern.length;
            }
            while (char === prevPatternChar && char !== nextPatternChar) {
                char = str[++currentChar];
            }
            currentPatternChar++;
            continue;
        }

        return false;
    }
    return currentChar === str.length && currentPatternChar === pattern.length;
}