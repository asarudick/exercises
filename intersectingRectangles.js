var fs = require( 'fs' );
var output = [];


function isIntersecting( rectangles ) {
	'use strict';
	return (
				(rectangles[0].bottomRight.x >= rectangles[1].topLeft.x
				&& rectangles[0].bottomRight.y <= rectangles[1].topLeft.y
				&& rectangles[0].topLeft.x <= rectangles[1].bottomRight.x
				&& rectangles[0].topLeft.y >= rectangles[1].bottomRight.y) ||
				(rectangles[1].bottomRight.x >= rectangles[0].topLeft.x
				&& rectangles[1].bottomRight.y <= rectangles[0].topLeft.y
				&& rectangles[1].topLeft.x <= rectangles[0].bottomRight.x
				&& rectangles[1].topLeft.y >= rectangles[0].bottomRight.y)
	);
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		var args = line.split(',').map(function(a){ return parseInt(a,10); });


		// Transform into rectangle objects.
		var rects = [];

		for ( var i = 0; i < args.length; i += 4 ) {
			rects.push( {
				topLeft: {
					x: args[ i ],
					y: args[ i + 1 ]
				},
				bottomRight: {
					x: args[ i + 2 ],
					y: args[ i + 3 ]
				}
			} );
		}

		output.push( isIntersecting( rects ) ? 'True' : 'False' );
	} );

console.log( output.join( '\n' ) );
