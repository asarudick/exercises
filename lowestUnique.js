var fs = require( "fs" );

function lowestUnique( nums ) {
	'use strict';

	var uniques = {};

	for ( var i = 0; i < nums.length; i++ ) {
		if ( uniques[ nums[ i ] ] === undefined )
			uniques[ nums[ i ] ] = i;
		else
			uniques[ nums[ i ] ] = null;
	}

	var lowest;

	for ( var item in uniques ) {
		if ( uniques.hasOwnProperty( item ) && uniques[ item ] !== null ) {
			if ( lowest === undefined ) {
				lowest = parseInt( item, 10 );
				continue;
			}
			if ( parseInt( item, 10 ) < lowest ) lowest = parseInt( item, 10 );
		}
	}

	return ( uniques[ lowest ] + 1 ) || 0;
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		console.log( lowestUnique( line.trim().split( ' ' ) ) );
	} );
