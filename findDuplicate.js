var fs = require( "fs" );

function swap( first, second, arr ) {
	var tmp        = arr[ first ];
	arr[ first ]   = arr[ second ];
	arr[ second ]  = tmp;

}
var findDuplicate = function ( arr ) {
	'use strict';

	for ( var i = 0; i < arr.length; i++ ) {

		// Otherwise, we need to swap until the current index has it's corresponding
		// number.
		while ( arr[ i ] !== arr[ arr[ i ] ] )
			swap( i, arr[ i ], arr );

        // If the current number is not at it's corresponding index, and
        // the number at it's corresponding index is the same, we've found it.
        if ( arr[ i ] !== i && arr[ arr[ i ] ] === arr[ i ] )
            return arr[i];
	}

	return null;
};

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line == "" ) return;
        var args = line.split(';');
		console.log( findDuplicate( args[1].split(',').map(function(a){return parseInt(a,10);}) ) );
	} );
