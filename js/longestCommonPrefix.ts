export default function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) { 
        return '';
    }
    const firstStr = strs[0] ?? '';

    const result: string[] = [];
    const minlength = Math.min(...strs.map(i => i.length));
    for (let i = 0; i < minlength; i++) {
        if (strs.some((str) => str.at(i) !== firstStr.at(i))) { return result.join('');}
        result.push(firstStr.at(i) ?? '');
    }

    return result.join('');
}