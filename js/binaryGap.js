export default function solution(N) {
    var maxSoFar = 0;
    var currentMax = 0;
    var position = 0;
    var intSize = 32;

    while( position <= intSize - 1 )
    {
        if ( N & (1 << position) )
        {
            maxSoFar = Math.max(currentMax, maxSoFar);
            currentMax = 0;
        }
        else
        {
            currentMax++;
        }
        position++;
    }

    return maxSoFar;
}
