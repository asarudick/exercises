(function() {

	function quickSort (A, p, r) {
		if (p < r) {
			var q = partition(A, p ,r);

			quickSort(A, p, q - 1);
			quickSort(A, q + 1, r);
		}
	}

	function partition (A, p, r) {
		var x = A[r];
		var i = p - 1;

		for (j = p; j < r; j++)
		{
			if (A[j] <= x)
			{
				i++;
				exchange(A, i, j);
			}
		}

		exchange(A, i + 1, r);

		return i + 1;
	}

	function exchange(A, i, j) {
		var tmp = A[i];
		A[i] = A[j];
		A[j] = tmp;
	}

	// Only export the quicksort funtion that operates on the full array.
	module.exports = function wholeQuickSort(A) {
		return quickSort(A, 0, A.length - 1);
	}
})();
