
var fs = require('fs');
var output = [];
var letter = /[a-z]/g;

function beautyValues(line)
{
	'use strict';

	var val = 26;
	var letters = {};
	var frequencies = {};

	// Build frequencies.
	for (var i = 0; i < line.length; i++) {
		if( frequencies[line[i]] === undefined )
		{
			frequencies[line[i]] = 1;
			continue;
		}
		frequencies[line[i]]++;
	}

	// Sort descendingly by frequency.
	line.sort(function(a,b){ return (frequencies[a]===frequencies[b]) ? 0 : ((frequencies[a]>frequencies[b]) ? -1 : 1); });

	// Compute values.
	for (var i = 0; i < line.length; i++) {
		if(  typeof letters[line[i]] === 'undefined' )
		{
			letters[line[i]] = val--;
		}
	}

	return letters;
}

function totalBeauty( str ) {
	'use strict';

	// Retrieve beauty values. (based on frequency)
	var letters = beautyValues(	str
								.split('')
								.filter(function(a) { return /[a-z]/g.test(a); })
								);
	return str
		.split('')
		.reduce( function( a, b ){
			if( letters[b] === undefined )
				return a;
			return a + letters[b];
	}, 0);
}


fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		output.push( totalBeauty(line.toLowerCase()) );
	});

console.log( output.join( '\n' ) );
