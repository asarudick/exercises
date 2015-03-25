
var fs = require('fs');
var output = [];

function getDoubleSquareCount(n)
{
	// Only need to check up to the midpoint, as we'll check n - i later.
	var mid = Math.sqrt( n / 2);

	var count = 0;

	for (var i = 0; i <= mid; i++) {
		var counterpart = Math.sqrt(n-Math.pow(i,2));

		if( counterpart === Math.floor(counterpart) ) {
			count++;
		}
	}

	return count;
}
var lines = fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' );

lines.length = parseInt(lines.shift(),10);

lines.forEach( function( line ) {
	if ( line === '' ) return;

	output.push( getDoubleSquareCount(parseInt(line,10)) );
});

console.log( output.join( '\n' ) );
