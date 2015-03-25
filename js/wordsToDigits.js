var fs = require( 'fs' );
var output = [];
var wordMap = {
	'zero': 0,
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9
};

function wordToDigit( line ) {
	'use strict';

	return line
			.split(';')
			.map(function(a){
				return wordMap[a];
			}).
			join('');
}


fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		output.push( wordToDigit( line ) );
	} );

console.log( output.join( '\n' ) );
