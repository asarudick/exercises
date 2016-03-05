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

function test(A) {
	quickSort(A, 0, A.length - 1);
	console.log(A);
}

test([]);
test([2,1]);
test([3,2,1]);
test([4,3,2,1]);
test([4,3,2,1]);
test([5,4,3,2,1]);
test([4,3,2,1,5]);
test([4,3,2,1,3]);
test([3,3,3,3,3]);
test([74,1,4,5,6,2,7,45,23]);
test([19,34,5,23,37,23,7,45,23]);
