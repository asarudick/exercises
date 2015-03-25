// 0:  0       1      (2)   (3)    4
// 1:      0      (1)    *2*   (3)
// 2:  0       1      (2)   (3)    4
// 3:      0       1      2     3
// 4:  0       1      (2)   (3)    4

// table[2][3]

// row, column -> neighbors = [ [neighbor_row, neighbor_column], ...]

( function() {
	"use strict";

	var table = [
		[ 'green', 'blue', false, false, false ],
		[ false, false, false, false ],
		[ false, false, false, false, false ],
		[ false, false, false, false ],
		[ false, false, false, false, false ]
	];

	var findNeighbors = function( targetTable, row, column ) {
		var result = [];

		var attemptPush = function( arr, hexTable, row, column ) {
			if ( typeof hexTable[ row ] !== 'undefined' && typeof hexTable[ row ][
				column
			] !== 'undefined' )
				arr.push( {
					'row': row,
					'column': column,
					value: hexTable[ row ][ column ]
				} );
		};

		attemptPush( result, targetTable, row - 1, column - ( ( row + 1 ) % 2 ) );
		attemptPush( result, targetTable, row - 1, column + ( row % 2 ) );
		attemptPush( result, targetTable, row, column - 1 );
		attemptPush( result, targetTable, row, column + 1 );
		attemptPush( result, targetTable, row + 1, column - ( ( row + 1 ) % 2 ) );
		attemptPush( result, targetTable, row + 1, column + ( row % 2 ) );

		return result;
	};

	var curryFindNeighbors = function( targetTable ) {
		return function( row, column ) {
			return findNeighbors( targetTable, row, column );
		};
	};

	var curriedFindNeighbors = curryFindNeighbors( table );

	// Test cases

	var tests = {

		//    Corners
		'Corner (0, 0)': curriedFindNeighbors( 0, 0 ),
		'Corner (last row, last column)': curriedFindNeighbors( table.length - 1,
			table[ 0 ].length -
			1 ),
		'Corner (0, last column)': curriedFindNeighbors( 0, table[ 0 ].length - 1 ),
		'Corner (last row,0)': curriedFindNeighbors( table.length - 1, 0 ),

		//    Odd row ends
		'Odd Ends (last column of row 1)': curriedFindNeighbors( 1, table[ 1 ].length -
			1 ),
		'Odd Ends (first column of row 1)': curriedFindNeighbors( 1, 0 ),

		//    Even row ends
		'Even Ends (last column of row 2)': curriedFindNeighbors( 2, table[ 2 ].length -
			1 ),
		'Even Ends (first column of row 2)': curriedFindNeighbors( 2, 0 ),

		//    Middle
		'Middle-ish (2,2)': curriedFindNeighbors( 2, 2 )
	};

	if ( typeof window.console !== 'undefined' ) console.log( tests );



} )();



var someObject = function() {
	var private_variable = 0;

	this.public_Var = true;

	this.getPrivateVar() {
		return private_variable;
	}
}