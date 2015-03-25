
var fs = require('fs');
var output = [];

function isPrime( number ) {
	if ( number === 0 || number === 1) return false;

	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 )
			return false;
	}

	return true;
}
function primesBetweenNM(n,m)
{
	var primes = 0;

	for (var i = n; i <= m; i++) {
		primes += isPrime(i);
	}

	return primes;
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( primesBetweenNM.apply(null, line.split(',').map(function(a){return parseInt(a,10);})) );
	});

console.log( output.join( '\n' ) );
