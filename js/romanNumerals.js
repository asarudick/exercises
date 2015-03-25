var fs = require( "fs" );
var numerals = [
	{numeral: 'M',	value: 1000},
	{numeral: 'CM',	value: 900},
	{numeral: 'D',	value: 500},
	{numeral: 'CD',	value: 400},
	{numeral: 'C',	value: 100},
	{numeral: 'XC',	value: 90},
	{numeral: 'L',	value: 50},
	{numeral: 'XL',	value: 40},
	{numeral: 'X',	value: 10},
	{numeral: 'IX',	value: 9},
	{numeral: 'V',	value: 5},
	{numeral: 'IV',	value: 4},
	{numeral: 'I',	value: 1}
];
function toRomanNumeral( number ) {
	'use strict';

	var result = '';

	for (var i = 0; i < numerals.length; i++) {

		// Get number of instances of the numeral to concatenate.
		var count = Math.floor( number / numerals[i].value );

		// Append numeral count times.
		for (var j = 0; j < count; j++) {
			result += numerals[i].numeral;
		}

		// Use the remainder on the next iteration.
		number = number % numerals[i].value;
	}

	return result;
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		console.log( toRomanNumeral( parseInt(line,10) ) );
	} );
