var fs = require( "fs" );
var previous;

function isHappyNumber( number ) {
	'use strict';

	if ( previous[ number ] !== undefined ) return false;
	if ( number === 1 ) return true;

	previous[number] = true;

	return isHappyNumber( number.toString()
		.split( '' )
		.reduce( function ( a, b ) {
			return Math.pow( parseInt(b,10), 2 ) + a;
		}, 0 ) );
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		previous = {};
		console.log( isHappyNumber( parseInt( line, 10 ) ) ? '1' : '0' );
	} );
