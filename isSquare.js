var fs = require( 'fs' );
var output = [];
var lineRegex = /\d+/g;

function distance( point, otherPoint )
{
	return Math.sqrt( Math.pow(point.y - otherPoint.y,2) + Math.pow(point.x - otherPoint.x,2) );
}

function isSquare( points ) {
	'use strict';

	if( points.length !== 4 ) return false;

	var distances = [
		distance(points[0], points[1]),
		distance(points[0], points[2]),
		distance(points[0], points[3])
	];

	if( (Math.pow(distances[1],2) + Math.pow(distances[2],2)).toFixed(9) == Math.pow(distances[0],2).toFixed(9)) return true;
	if( (Math.pow(distances[0],2) + Math.pow(distances[2],2)).toFixed(9) == Math.pow(distances[1],2).toFixed(9)) return true;
	if( (Math.pow(distances[0],2) + Math.pow(distances[1],2)).toFixed(9) == Math.pow(distances[2],2).toFixed(9)) return true;
	return false;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		var matches = line.match( lineRegex )
			.map( function ( a ) {
				return parseInt( a, 10 );
			} );


		// Transform into pairs.
		var pairs = [];

		for ( var i = 0; i < matches.length; i += 2 ) {
			pairs.push( {
				x: matches[ i ],
				y: matches[ i + 1 ]
			} );
		}

		output.push( isSquare(pairs) );
	} );

console.log( output.join( '\n' ) );
