
var fs = require('fs');
var output = [];

function areEqualBits( data, a, b ) {
	'use strict';
	var mask = ( 1 << (a-1)) | ( 1 << (b-1) );
	var result = data & mask;
	return result === mask || result === 0;
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( areEqualBits.apply(null, line.split(',')).toString() );
	});

console.log( output.join( '\n' ) );
