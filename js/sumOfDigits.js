var fs = require( "fs" );

function distance(a,b)
{
	return Math.sqrt( (Math.pow(b.x,2) - Math.pow(a.x,2)) + (Math.pow(b.y,2) - Math.pow(a.y,2)) );
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var matches = /\((\d), (\d)\) \((\d,) (\d\))/.match(line);

		console.log( matches );

	} );
