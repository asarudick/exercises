var fs = require( 'fs' );

function rotateString(str) {
	var arr = str.split('');

	arr.unshift( arr.pop() );
	return arr.join('');
}

function isRotation(str, rotated)
{
	'use strict';

	// Obvious check.
	if( str.length !== rotated.length ) return false;

	var original = str;

	do
	{
		str = rotateString(str);
		if( str === rotated ) return true;
	}
	while( str !== original )

	return false;

}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		console.log( isRotation.apply(null, line.split(',')) ? 'True' : 'False' );
	} );
