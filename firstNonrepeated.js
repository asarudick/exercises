var fs = require( "fs" );
function firstNonrepeated( line )
{
	var uniques = {};

	for (var i = 0; i < line.length; i++) {
		if( uniques[line[i]] === undefined )
			uniques[line[i]] = true;
		else
			uniques[line[i]] = false;
	}

	for (var i = 0; i < line.length; i++) {
		if( uniques[line[i]] === true ) return line[i];
	}
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		console.log( firstNonrepeated(line) );
	} );
