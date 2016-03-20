export default function tapeEquilibrium(A)
{

    var leftSum = A[0];
    var rightSum = A.reduce( function(a, b) { return a + b; }, 0) - A[0];

    var minSoFar = Math.abs(rightSum - leftSum);
    var minimumSplitIndex = 1;

    for (var i = 1, length = A.length - 1; i < length; i++) {
        rightSum -= A[i];
        leftSum += A[i];

        var diff = Math.abs(rightSum - leftSum);

        if ( diff < minSoFar )
        {
            minimumSplitIndex = i + 1;
            minSoFar = diff;
        }
    }

    return minSoFar;
}
