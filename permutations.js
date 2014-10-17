
var fs = require('fs');
var output = [];
var digits = /[\d]/,
	upper  = /[A-Z]/,
	lower  = /[a-z]/;

function permutations(str)
{
	'use strict';

	// Using object to weed out duplicates.
	var mutations = {};

	var permutate = function(prefix, str) {
		'use strict';

		if( str == '' ) mutations[prefix] = prefix;

		for (var i = 0; i < str.length; i++) {
			permutate(prefix + str[i], str.substring(0, i) + str.substring(i+1, str.length));
		}
	};

	permutate('', str);

	return Object.keys(mutations).sort().join(',');
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		'use strict';

		if ( line === '' ) return;

		output.push( permutations(line) );
	});

console.log( output.join( '\n' ) );
