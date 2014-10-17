
var fs = require('fs');
var output = [];

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		var words = line.split(' ');
		output.push( words[words.length-2] );
	});

console.log( output.join( '\n' ) );
