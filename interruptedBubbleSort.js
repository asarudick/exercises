var fs = require( 'fs' );
var output = [];

function swap( arr, sourceIndex, destinationIndex ) {
	var tmp = arr[ sourceIndex ];
	arr[ sourceIndex ] = arr[ destinationIndex ];
	arr[ destinationIndex ] = tmp;
}

function bubbleSort( arr, times ) {
	times = Math.min( arr.length, times );

	for ( var j = 0; j < times; j++ ) {

		for ( var i = 0; i < arr.length - 1; i++ ) {
			if ( ( arr[ i ] > arr[ i + 1 ] ) ) swap( arr, i, i + 1 );
		}

	}

	return arr;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		var args = line.split( ' | ' );
		var arr = args[ 0 ].split( ' ' )
			.map( function ( a ) {
				return parseInt( a, 10 );
			} );

		var iterations = parseInt( args[ 1 ], 10 );

		arr = bubbleSort( arr, iterations );
		output.push( arr.join( ' ' ) );
	} );

console.log( output.join( '\n' ) );
