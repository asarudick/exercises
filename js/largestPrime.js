
var output = [];

function isPrime( number ) {
	if ( number < 2 ) return false;

	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 )
			return false;
	}

	return true;
}
function largestPrimePalindrome(count)
{
	var largest = 0;

	for (var i = 0; i < count; i++) {
		if( isPrime(i) && i.toString().split('').reverse().join('') == i.toString()) largest = i;
	}

	return largest;
}


console.log( largestPrimePalindrome(1000) );
