
var fs = require('fs');
var output = [];

function permutate(prefix, str) {
	'use strict';

	if( str == '' ) return prefix;
	
	for (var i = 0; i < str.length; i++) {
		permutate(prefix + str[i], str.substring(0, i) + str.substring(i+1, str.length);
	}
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		'use strict';

		if ( line === '' ) return '';

		output.push( permutate(line) );
	});

console.log( output.join( '\n' ) );
