
var fs = require('fs');
var output = [];

// FizzBuzz!
function fizzBuzz( x, y, z ) {
    'use strict';

    var result = [];

    for ( var i = 1; i <= z; i++ ) {

        // Divisible by both.
        if( ( i % x ) === 0 && (i % y) === 0 )
            result.push( 'FB' );

        // Divisible by X
        else if( ( i % x ) === 0 )
            result.push( 'F' );

        // Divisible by Y
        else if( ( i % y ) === 0 )
            result.push( 'B' );

        // Not divisible.
        else
            result.push( i );
    }

    return result.join(' ');
}

fs.readFileSync( process.argv[2] )
    .toString()
    .split( '\n' )
    .forEach( function( line ) {
        if ( line == '' ) return;

        output.push( fizzBuzz.apply( null, line.split(' ') ) );
    });

console.log( output.join( '\n' ) );
