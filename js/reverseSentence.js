
var fs = require('fs');
var output = [];

function reverse( sentence ) {
	return sentence.split(' ').reverse().join(' ');
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( reverse(line) ).toString() );
	});

console.log( output.join( '\n' ) );
