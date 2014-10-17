
var fs = require('fs');
var output = [];

function rollerCoaster( text ) {
	var chars = text.split('');
	var upper = true;
	var isLetter = /[A-Za-z]/;
	for (var i = 0; i < chars.length; i++) {

		// Ignore letters.
		if( isLetter.test(chars[i]) === false ) continue;
		
		if( upper === true )
			chars[i] = chars[i].toUpperCase();

		upper = !upper;
	}

	return chars.join('');
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( rollerCoaster(line) );
	});

console.log( output.join( '\n' ) );
