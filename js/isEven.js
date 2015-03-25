
var fs = require('fs');
var output = [];

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( (parseInt(line,10) % 2 === 0 ? 1 : 0 ) );
	});

console.log( output.join( '\n' ) );
