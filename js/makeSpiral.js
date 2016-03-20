export default function makeSpiral(size) {

    // initialize 2d array
    var result = [];

    for (var i = 0; i < size; i++) {
        result.push([]);

        for (var j = 0; j < size; j++) {
            result[i].push(0);
        }
    }

    var top = 0,
        left = 0,
        right = size - 1,
        bottom = size - 1;

    var continueConditions = function () {
        return top <= bottom && left <= right;
    };

    while (continueConditions()) {
        for (var i = Math.max(0, left - 1); i <= right; i++) {
            result[top][i] = 1;
        }
        top += 2;

        for (var i = top - 1; i <= bottom; i++) {
            result[i][right] = 1;
        }
        right -= 2;

        if (!continueConditions()) {
            break;
        }

        for (var i = left; i <= right + 1; i++) {
            result[bottom][i] = 1;
        }
        bottom -= 2;

        for (var i = top; i <= bottom + 1; i++) {
            result[i][left] = 1;
        }
        left += 2;

    }

    return result;
}
