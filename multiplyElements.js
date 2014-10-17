var fs = require( 'fs' );
var output = [];

function multiplyElements( sets ) {
	if( sets.length == 1 ) return sets[0];
	for (var i = 0; i < sets.length-1; i++) {
		for (var j = 0; j < sets[i].length; j++) {
			sets[i][j] *= sets[i+1][j];
		}
	}
	return multiplyElements(sets.slice(0, sets.length-1));
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var lists = line.split( ' | ' );

		output.push( multiplyElements( [ lists[0].split(' '), lists[1].split(' ') ] ).join(' ') );
	} );

console.log( output.join( '\n' ) );
