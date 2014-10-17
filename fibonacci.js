
var fs = require('fs');
var output = [];

function fibonacci( n ) {
	'use strict';

	var values = {
		'0': 0,
		'1': 1
	};
	var fib = function( n ) {
		if ( values[ n ] === undefined ) {
			values[ n ] = fib( n - 1 ) + fib( n - 2 );
		}

		return values[ n ];
	};

	return fib( n );
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( fibonacci( line ) );
	});

console.log( output.join( '\n' ) );
