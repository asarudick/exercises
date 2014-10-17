
var fs = require('fs');
var output = [];

function largestContiguousSum( arr ) {
	'use strict';
	var largestSoFar = 0;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum 			= Math.max(0, sum + parseInt(arr[i],10));
		largestSoFar 	= Math.max(largestSoFar, sum);
	}
	return largestSoFar;
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( largestContiguousSum(line.split(',') ) );
	});

console.log( output.join( '\n' ) );
