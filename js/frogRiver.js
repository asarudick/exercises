export default function frogRiver (X, A) {
    var fallenLeaves = new Array(X);
    var leavesLeft = X;

    for (var i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= X)
        {
            if ( fallenLeaves[A[i] - 1] === undefined )
            {
                fallenLeaves[A[i] - 1] = true;
                leavesLeft--;
            }
            if (!leavesLeft)
            {
                return i;
            }
        }
    }

    return -1;
}
