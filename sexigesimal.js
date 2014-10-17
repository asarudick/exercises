var fs = require( 'fs' );
var output = [];

function pad( num, size ) {
	return ( '000000' + num ).substr( -size );
}

function toSexigesimal( number ) {
	'use strict';

	var degrees = Math.floor( number );

	number -= degrees;

	var minutes = Math.floor( number * 60 );

	number = ( number * 60 ) - minutes;

	var seconds = Math.floor( number * 60 );

	return degrees + '.' + pad( minutes, 2) + '\'' + pad( seconds, 2 ) + '"';

}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( toSexigesimal( parseFloat( line, 10 ) ) );
	} );

console.log( output.join( '\n' ) );
