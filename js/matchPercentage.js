
var fs = require('fs');
var output = [];
var lower = /[a-z]/g;
var upper = /[A-Z]/g;

function matchPercentage( str ) {
	'use strict';

	var upperMatches = str.match(upper);
	var lowerMatches = str.match(lower);

	var upperCount = (upperMatches !== null) ? upperMatches.length : 0;
	var lowerCount = (lowerMatches !== null) ? lowerMatches.length : 0;
	var total = upperCount + lowerCount;

	return 'lowercase: ' + ((lowerCount / total)*100).toFixed(2) + ' uppercase: ' + ((upperCount / total)*100).toFixed(2);
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		output.push( matchPercentage(line) );
	});

console.log( output.join( '\n' ) );
