function findMostFrequent( arr ) {
	'use strict';

	if ( arr === undefined || arr === null || arr.length === 0 ) {
		return;
	}

	var count = {};
	for ( var i = 0; i < arr.length; i++ ) {

		// Initialize to zero if not found.
		if ( count[ arr[ i ] ] === undefined ) {
			count[ i ] = 0;
		}

		// We found the integer in the array. Increment!
		count[ arr[ i ] ]++;
	}

	var highest;

	for ( var int in count ) {
		if ( count.hasOwnProperty( int ) ) {
			if ( highest === null || highest === undefined ) highest = int;
			if ( count[ int ] > count[ highest ] ) highest = int;
		}
	}

	return highest;
}

function findPairSumsOfN( n ) {
	'use strict';
	return function( arr ) {
		var pairs = [],
			count = {};

		for ( var i = 0; i < arr.length; i++ ) {
			if ( typeof arr[ i ] !== 'number' ) continue;
			if ( count[ n - arr[ i ] ] === undefined ) {
				count[ n - arr[ i ] ] = 0;
			}
			count[ n - arr[ i ] ]++;
		}

		for ( var i = 0; i < arr.length; i++ ) {
			if ( count.hasOwnProperty( arr[ i ] ) && count[ arr[ i ] ] > 0 ) {
				count[ arr[ i ] ]--;
				count[ n - arr[ i ] ]--;
				pairs.push( {
					right: arr[ i ],
					left: n - arr[ i ]
				} );
			}
		}

		return pairs;

	}
}

function fibonacci( n ) {
	var values = {
		'0': 0,
		'1': 1
	};
	var fib = function( n ) {
		if ( values[ n ] === undefined ) {
			values[ n ] = fib( n - 1 ) + fib( n - 2 );
		}

		return values[ n ];
	};

	return fib( n );
}