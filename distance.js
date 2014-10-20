var fs = require( "fs" );

function distance(a,b)
{
	return Math.sqrt( Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y,2) );
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var coords = line.match(/-?\d+/g);

		console.log( distance({x: parseInt(coords[0],10), y: parseInt(coords[1],10)},{x: parseInt(coords[2],10), y: parseInt(coords[3],10)}).toFixed(0) );

	} );
