var fs = require( 'fs' );
var output = [];

function findWriter( code, key ) {
	var keys = key.split(' ');
	var result = '';

	for (var i = 0; i < keys.length; i++) {
		result += code[keys[i]-1];
	}

	return result;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var args = line.split( '|' );

		output.push( findWriter( args[0].trim(), args[1].trim() ) );
	} );

console.log( output.join( '\n' ) );
