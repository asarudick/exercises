var fs = require( 'fs' );

function countSetBits(number) {
	var count = number & 1;

	while ( number >>= 1 ) { count += number & 1;}

	return count;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		console.log( countSetBits(parseInt( line, 10 )) );
	} );
