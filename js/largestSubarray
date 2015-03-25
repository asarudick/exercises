
var fs = require('fs');
var output = [];

function largestSubArray( arr ) {
	'use strict';

	if( arr === undefined ) return 0;

	var sum = arr.reduce( function(a,b){return a+b;},0);
	var leftTrimmedSum = largestSubArray( arr.slice(0, arr.length-1) );
	var rightTrimmedSum = largestSubArray( arr.slice(1, arr.length) );

	return Math.max( sum, leftTrimmedSum, rightTrimmedSum );
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( largestSubArray(line.split(',') ) );
	});

console.log( output.join( '\n' ) );
