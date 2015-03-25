
var fs = require('fs');
var output = [];

/**
 * Assumes list is sorted.
 */
function isSelfDescribing( number )
{
	var hash = {};
	number = number.toString().split('');

	// Build hashtable.
	for (var i = 0; i < number.length; i++) {
		if( hash[number[i]] === undefined ) hash[number[i]] = 0;
		hash[number[i]]++;
	}

	for (var i = 0; i < number.length; i++) {
		if( hash[i] !== number[i] ) return false;
	}

	return true;
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( isSelfDescribing(line) );
	});

console.log( output.join( '\n' ) );
