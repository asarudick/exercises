import _ from 'lodash';
export default function knapsack (weights, values, maxWeight) {

    // Create 2-D array, pad with extra row and column so we don't need to check for out of bounds, and fill with zeros.
    // Items are rows, weights are columns.
    const memo = _.times(values.length + 1, () => _.times(maxWeight + 1, _.constant(0)));
    const rows = memo.length;
    const cols = memo[0].length;
    weights.unshift(0);
    values.unshift(0);

    // Don't care about the 0th item, or weight 0. No items can be selected for
    // weight 0, nor can we select anything if we have no item available.
    for (let item = 1; item < rows; item++)
    {
        for (let weight = 0; weight < cols; weight++)
        {
            memo[item][weight] = memo[item - 1][weight];

            if (weight - weights[item] >= 0)
            {
                memo[item][weight] = Math.max(memo[item][weight], memo[item - 1][weight - weights[item]] + values[item]);
            }
        }
    }

    // Result will be at the last element.
    return memo[rows - 1][cols - 1];
}
