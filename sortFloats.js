var fs = require( 'fs' );
var output = [];


fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( line
						.split( ' ' )
						.map( function ( a ) {
							return parseFloat( a, 10 ).toFixed(3);
						} )
						.sort(function(a,b) {return a-b;})
						.join( ' ' )
		);
	} );

console.log( output.join( '\n' ) );
