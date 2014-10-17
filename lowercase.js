
var fs = require('fs');
var output = [];

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( line.toLowerCase() );
	});

console.log( output.join( '\n' ) );
