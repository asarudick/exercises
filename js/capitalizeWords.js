var fs = require( "fs" );

function capitalizeWord( word ) {
	var wordArr = word.split( '' );
	wordArr[ 0 ] = wordArr[ 0 ].toUpperCase();
	return wordArr.join( '' );
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		console.log( line.split( ' ' )
			.map( function ( a ) {
				return capitalizeWord( a );
			} )
			.join( ' ' ) );
	} );
