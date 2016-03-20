export default function solution(A, K)
{
    if (!A.length)
    {
        return [];
    }

    while (K)
    {
        var element = A.pop();
        A.unshift(element);
        K--;
    }

    return A;
}
