
var fs = require('fs');
var output = [];

function isPrime( number ) {
	if ( number < 2 ) return false;

	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 )
			return false;
	}

	return true;
}
function primesBeforeN(n)
{
	var primes = [];
	for (var i = 0; i < n; i++) {
		if( isPrime(i) ) primes.push(i);
	}

	return primes;
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( primesBeforeN( parseInt(line,10) ).join(',') );
	});

console.log( output.join( '\n' ) );
