'use strict';

// Exercise: Given an array of positive, non-zero integers A and sum T, determine if A has a contiguous subarray that sums to T.
function hasContiguousSumOfT (a, t) {

	if(!a.length)
	{
		return false;
	}

	var start = 0,
		end = 0;

	var sum = a[0];

	while ( end < a.length )
	{
		if (sum === t)
		{
			return true;
		}

		if (sum < t)
		{
			sum += a[++end];
			continue;
		}

		if (sum > t)
		{
			sum -= a[start++];
			continue;
		}
	}

	return false;

}

// Tests
console.log(hasContiguousSumOfT([1,2,3,4,5], 5));
console.log(hasContiguousSumOfT([1,2,3,4,5], 7));
console.log(hasContiguousSumOfT([1,2,3,4,5], 3));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 3));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 22));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 22));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 20));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 16));
console.log(hasContiguousSumOfT([22,2,2,2,1,2,3,4,5], 87));
