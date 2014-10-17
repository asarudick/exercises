var fs = require( 'fs' );
var output = [];

function revealDigits( line )
{
	var matches = line
			.match(/[a-j\d]/g)

	if( matches === null ) return 'NONE';

	return matches
			.map(function(a){
				if( /\d/g.test(a) ) return a;
				return a.charCodeAt(0) - 97;
			 })
			.join('');

}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push( revealDigits(line) );
	} );

console.log( output.join( '\n' ) );
