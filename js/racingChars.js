var fs = require( 'fs' );
var output = [];
var lastPosition = null;

function driveChar( line ) {
	'use strict';

	var checkpointExists = line.indexOf( 'C' ) > -1;

	var nextPosition = checkpointExists ? line.indexOf( 'C' ) : line.indexOf( '_' );

	var result;
	if ( lastPosition === null ) {
		result = line.replace( '_', '|' );
	} else if ( nextPosition > lastPosition ) {
		result = line.replace( ( checkpointExists ? 'C' : '_' ), '\\' );
	} else if ( nextPosition < lastPosition ) {
		result = line.replace( ( checkpointExists ? 'C' : '_' ), '\/' );
	} else {
		result = line.replace( ( checkpointExists ? 'C' : '_' ), '|' );
	}

	lastPosition = nextPosition;

	return result;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( driveChar( line ) );
	} );

console.log( output.join( '\n' ) );
