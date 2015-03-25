
var fs = require('fs');
var output = [];

function removeCharacters( sentence, chars ) {
	'use strict';
	var regex = new RegExp('['+chars+']+', 'g');
	return sentence.replace(regex,'');
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( removeCharacters.apply(null, line.split(', ') ) );
	});

console.log( output.join( '\n' ) );
