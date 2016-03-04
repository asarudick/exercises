'use strict';

// The "Two Sum" problem, where two numbers must be found in the array a that sum to t.
// Has O(N) time complexity in worst case, where no two numbers are found, otherwise in O(k) time complexity where the second number is the kth element.
function twoSum( a, t )
{
	var sums = {};

	for (var i = 0, length = a.length; i < length; i++) {
		if (sums[t - a[i]] !== undefined )
		{
			return true;
		}
		sums[a[i]] = true;
	}

	return false;
}


console.log(twoSum([1,2,3,4,5], 7));
console.log(twoSum([1,2,3,4,5], 6));
console.log(twoSum([1,2,3,4,5], 3));
console.log(twoSum([1,2,3,4,5], 9));
console.log(twoSum([1,2,3,4,5], 10));
