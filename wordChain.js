var fs = require( 'fs' );
var output = [];
var digits = /[\d]/,
	upper = /[A-Z]/,
	lower = /[a-z]/;

function permutations( list ) {
	// Empty list has one permutation
	if ( list.length == 0 )
		return [
			[]
		];

	var result = [];

	for ( var i = 0; i < list.length; i++ ) {

		var copy = list.slice( 0, list.length );

		// Cut one element from list
		var head = copy.splice( i, 1 );

		// Permute rest of list
		var rest = permutations( copy );

		// Add head to each permutation of rest of list
		for ( var j = 0; j < rest.length; j++ ) {
			var next = head.concat( rest[ j ] );
			result.push( next );
		}
	}

	return result;
}

function chainLength( words ) {
	var count = 0;

	for (var i = 0; i < words.length-1; i++) {
		if( words[i][words[i].length-1] !== words[i+1][0] ) return count;
		count++;
	}

	return count;
}

function chains( words ) {
	'use strict';

	var permuted = permutations( words );

	var max = 0;

	for ( var i = 0; i < permuted.length; i++ ) {
		max = Math.max( chainLength( permuted[ i ] ), max );
		if( max === words.length - 1) return words.length;
	}

	return max > 0 ? max + 1 : 'None';
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\r\n' )
	.forEach( function ( line ) {
		'use strict';

		if ( line === '' ) return;

		output.push( chains( line.split(',') ) );
	} );

console.log( output.join( '\n' ) );
