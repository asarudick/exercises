'use strict';

var fs = require( "fs" );

var findNumberPairs = function ( numbers, sum ) {

    // Used to provide a O(1) lookup for the numbers.
    var map = {};

    // The resulting found pairs.
    var pairs = [];

    // Used as a historical record of numbers already used in calculations.
    var used = {};

    // Insert number into hashmap. 'true' valeu indicates that the number exists within numbers.
    // Provides an O(1) lookup time.
    numbers.forEach( function ( number ) {
        map[ number ] = true;
    } );

    numbers
	.map(function(number) {
		return parseInt(number, 10);
	})
	.forEach( function ( number ) {

        // If the number does not exist in a pair, and the number's complement(sum-number) exists,
        // both both numbers in the pair array, and marked both as used.
        if ( typeof used[ number.toString() ] == 'undefined' &&
            typeof map[ (sum - number).toString() ] !== 'undefined' && number !== sum - number ) {

			var pair = [ number, sum - number ];

            pairs.push( pair );
            used[ number ] = true;
            used[ sum - number ] = true;

        }
    } );

    pairs.sort( function ( a, b ) {
        // a is less than b by some ordering criterion
        if ( a[ 0 ] < b[ 0 ] ) {
            return -1;
        }
        // a is greater than b by the ordering criterion
        if ( a[ 0 ] > b[ 0 ] ) {
            return 1;
        }
        // a must be equal to b
        return 0;
    } );

    return pairs;
}


fs.readFileSync( process.argv[ 2 ] )
    .toString()
    .split( '\n' )
    .filter( function ( line ) {
        return line !== "";
    } )
    .forEach( function ( line ) {
        var args = line.split( ';' );
        var numbers = args[ 0 ].split( ',' );
        var sum = args[ 1 ];

        var pairs = findNumberPairs( numbers, sum );

        if ( pairs.length == 0 )
            console.log( "NULL" );
        else {
            // Format the output something like '1,4;2,3'
            var output = pairs.map( function ( pair ) {
                    return pair.join( ',' );
                } )
                .join( ';' );
            console.log( output );
        }
    } );
