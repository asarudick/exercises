var fs = require( 'fs' );
var output = [];

function shortestRepetition( line ) {


}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( shortestRepetition( line ) );
	} );

console.log( output.join( '\n' ) );
