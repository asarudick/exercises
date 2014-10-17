var fs = require( 'fs' );
var output = [];

function getMajorElement( line ) {
	'use strict';

	var arr = line.split(',');
	var values = {};
	for (var i = 0; i < arr.length; i++) {
		if( values[arr[i]] === undefined ) values[arr[i]] = 0;
		values[arr[i]]++;
	}

	for (var value in values) {
		if (values.hasOwnProperty(value)) {
			if( values[value] > arr.length/2 ) return value;
		}
	}
	return 'None';
}


fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		output.push( getMajorElement( line ) );
	} );

console.log( output.join( '\n' ) );
