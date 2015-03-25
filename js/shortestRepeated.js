var fs = require( "fs" );

function shortestRepeated(line) {

	for (var i = 1; i < line.length; i++) {
		if ( line[i] === line[0] ) return i;
	}
	return line.length;
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {


		console.log( shortestRepeated(line) );
	} );
