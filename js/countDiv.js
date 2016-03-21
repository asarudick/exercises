export default function countDiv (A, B, K) {
    var result = Math.floor(B / K) - Math.floor(A / K);
    result += A !== 0 && A % K === 0;
    result += A === 0 || B === 0;
    return result;
}
