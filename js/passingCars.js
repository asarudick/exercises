export default function passingCars (A)
{
    var westward = 0;
    var pairs = 0;

    for (var i = A.length - 1; i >= 0; i--) {
        if ( A[i] === 1 )
        {
            westward++;
            continue;
        }

        if ( A[i] === 0 )
        {
            pairs += westward;
        }
    }

    return pairs > 1000000000 ? -1 : pairs;
}
