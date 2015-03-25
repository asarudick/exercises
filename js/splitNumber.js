
var fs = require('fs');
var output = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function splitNumber(num, formula)
{
	'use strict';
	var variables = {};

	// Pair number with alphabet
	for (var i = 0; i < num.length; i++) {
		variables[alphabet[i]] = num[i];
	}

	// Important to declare as string.
	var converted = '';

	for (var j = 0; j < formula.length; j++) {
		converted += variables[formula[j]] || formula[j];
	}

    var operands;

	// Do the math!
	if( converted.indexOf('+') > -1 )
	{
		operands = converted.split('+');
		return parseInt(operands[0],10) + parseInt(operands[1],10);
	}
	else if ( converted.indexOf('-') > -1 )
	{
		operands = converted.split('-');
		return parseInt(operands[0],10) - parseInt(operands[1],10);
	}
	else
		return parseInt(converted, 10);
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		'use strict';

		if ( line === '' ) return;
		output.push( splitNumber.apply(null, line.toLowerCase().split(' ')) );
	});

console.log( output.join( '\n' ) );
