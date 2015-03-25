
var output = [];

function isPrime( number ) {
	if ( number < 2 ) return false;

	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 )
			return false;
	}

	return true;
}
function getPrimes(count)
{
	var primes = [];
	var i = 0;

	while(primes.length < count) {
		if( isPrime(i) === true ) primes.push(i);
		i++;
	}

	 return primes;
}


console.log( getPrimes(1000).reduce(function(a,b){ return a + b; },0) );
