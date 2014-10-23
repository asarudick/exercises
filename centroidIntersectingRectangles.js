var fs = require( 'fs' );
var output = [];


function isIntersecting( rectangles ) {
	'use strict';

	var rects = {
		a: {
			topLeft: rectangles[ 0 ].topLeft,
			bottomRight: rectangles[ 0 ].bottomRight,
			center: {
				x: ( rectangles[ 0 ].topLeft.x + rectangles[ 0 ].bottomRight.x ) / 2,
				y: ( rectangles[ 0 ].topLeft.y + rectangles[ 0 ].bottomRight.y ) / 2
			}

		},
		b: {
			topLeft: rectangles[ 1 ].topLeft,
			bottomRight: rectangles[ 1 ].bottomRight,
			center: {
				x: ( rectangles[ 1 ].topLeft.x + rectangles[ 1 ].bottomRight.x ) / 2,
				y: ( rectangles[ 1 ].topLeft.y + rectangles[ 1 ].bottomRight.y ) / 2
			}
		}
	};

	rects.a.width = Math.abs( rects.a.center.x - rects.a.topLeft.x );
	rects.a.height = Math.abs( rects.a.center.y - rects.a.topLeft.y );

	rects.b.width = Math.abs( rects.b.center.x - rects.b.topLeft.x );
	rects.b.height = Math.abs( rects.b.center.y - rects.b.topLeft.y );

	return rects.a.center.x - rects.b.center.x <= rects.a.width + rects.b.width &&
		rects.a.center.y - rects.b.center.y <= rects.a.height + rects.b.height;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		var args = line.split( ',' )
			.map( function ( a ) {
				return parseInt( a, 10 );
			} );

		console.log(args);
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
