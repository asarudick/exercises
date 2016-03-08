(function() {
	'use strict';

	/**
	 * Returns an array containing the elements in clockwise, out-in order of the MxN array.
	 * @method spiralOrder
	 * @param  {array}    matrix	The MxN two-dimensional array to traverse.
	 * @return {array}              The sequence of elements traversed.
	 */
	function spiralOrder (matrix) {
		var result = [];

		if (!matrix || !matrix.length)
		{
			return result;
		}

		// Indexes.
		var top = 0,
			down = matrix.length - 1,
			left = 0,
			right = matrix[0].length - 1;

		// Private helper function.
		function outOfBounds()
		{
			return top > down || left > right;
		}

		// Le loop.
		while (true)
		{
			for (var i = left; i <= right; ++i) {
				result.push(matrix[top][i]);
			}
			top++;
			if (outOfBounds())
			{
				break;
			}
			for (var i = top; i <= down; ++i) {
				result.push(matrix[i][right]);
			}
			right--;
			if (outOfBounds())
			{
				break;
			}
			for (var i = right; i >= left; --i) {
				result.push(matrix[down][i]);
			}
			down--;
			if (outOfBounds())
			{
				break;
			}
			for (var i = down; i >= top; --i) {
				result.push(matrix[i][left]);
			}
			left++;
			if (outOfBounds())
			{
				break;
			}
		}

		return result;
	}

	module.exports = spiralOrder;
}());
