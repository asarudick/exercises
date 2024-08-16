export default function isPalindrome(x: number): boolean {
    const sign = x < 0 ? -1 : 1;
    const str = Math.abs(x).toString();
    if (sign === -1) {
        return false;
    }
    const center = Math.floor(str.length / 2);
    for (let i = 0; i <= center; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};