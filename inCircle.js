var fs = require( 'fs' );
var output = [];
var lineRegex = /^Center: \((.*),(.*)\); Radius: (.*); Point: \((.*),(.*)\)$/;

function inCircle( center, radius, point ) {
	'use strict';
	return Math.sqrt( Math.pow(center.y - point.y,2) + Math.pow(center.x - point.x,2)) <= radius;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var matches = line.match( lineRegex )
			.map( function ( a ) {
				return parseFloat( a, 10 );
			} );

		output.push( inCircle( {
			x: matches[ 1 ],
			y: matches[ 2 ]
		}, matches[ 3 ], {
			x: matches[ 4 ],
			y: matches[ 5 ]
		} ) );
	} );

console.log( output.join( '\n' ) );
