var fs = require( 'fs' );
var output = [];

function separateNumbers( line ) {
	'use strict';

	var nums = [];
	var strings = [];
	var arr = line
				.split( ',' )
				.forEach( function(element)
				{
					if(/[0-9]+/g.test(element) === true)
						nums.push(element);
					else
						strings.push(element);
				} );

	return strings.join(',') + (nums.length > 0  && strings.length > 0 ? '|' : '') + nums.join(',');

}


fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		output.push( separateNumbers( line ) );
	} );

console.log( output.join( '\n' ) );
