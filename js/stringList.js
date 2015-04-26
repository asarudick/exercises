'use strict';

var fs = require( "fs" );

var getUniqueChars = function(chars) {
	var seen = {};
	var uniqueChars = [];

	for (var i = 0; i < chars.length; i++) {
		if( typeof seen[chars[i]] === 'undefined' )
			uniqueChars.push(chars[i]);

		seen[chars[i]] = true;
	}

	return uniqueChars;
}

var cartesianProductWrapper = function(chars, len)
{
	var seen = {};
	var max = Math.pow(getUniqueChars(chars).length, len);
	return cartesianProduct( chars, len, seen, max );

}

var cartesianProduct = function ( chars, len, seen, max ) {

    if ( len === 1 )
	{
		return getUniqueChars(chars);
	}

    var result = [];

    var strings = cartesianProduct( chars, len - 1, seen, max );

    for ( var i = 0; i < strings.length; i++ ) {
        for ( var j = 0; j < chars.length; j++ ) {
			var string = chars[j] + strings[i];

			if( typeof seen[string] !== 'undefined' ) continue;

            result.push( string );

			seen[string] = true;

            if ( result.length >= max ) {
                return result;
            }

        }
    }

    return result;
}

fs.readFileSync( process.argv[ 2 ] )
    .toString()
    .split( '\n' )
    .forEach( function ( line ) {
        if ( line === '' ) return;

        var args = line.split( ',' );

        var length = parseInt( args[ 0 ], 10 );
        var chars = args[ 1 ].split( '' );

        console.log( cartesianProductWrapper( chars, length )
            .sort()
            .join( ',' ) );
    } );
