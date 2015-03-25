var fs = require( 'fs' );
var output = [];

var mapping = {
	'a': 'y',
	'b': 'h',
	'c': 'e',
	'd': 's',
	'e': 'o',
	'f': 'c',
	'g': 'v',
	'h': 'x',
	'i': 'd',
	'j': 'u',
	'k': 'i',
	'l': 'g',
	'm': 'l',
	'n': 'b',
	'o': 'k',
	'p': 'r',
	'q': 'z',
	'r': 't',
	's': 'n',
	't': 'w',
	'u': 'j',
	'v': 'p',
	'w': 'f',
	'x': 'm',
	'y': 'a',
	'z': 'q'
};

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( line.split('').map(function(a){ return mapping[a] !== undefined ? mapping[a] : a; }).join('') );
	} );

console.log( output.join( '\n' ) );
