export default function minimumInteger (A) {

    A.sort(function (a, b) {
        return a - b;
    });

    var minimum = 1;

    for (var i = 0, length = A.length; i < length; i++) {

        // Ignore negative numbers.
        if ( A[i] < minimum )
        {
            continue;
        }

        if ( A[i] === minimum )
        {
            ++minimum;
            continue;
        }

        if ( A[i] > minimum )
        {
            return minimum;
        }
    }

    return minimum;
}
