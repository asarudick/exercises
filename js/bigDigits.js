var fs = require( 'fs' );
var output = [];
var digitHeight = 6;

var bigDigits = [
	[
			'-**--',
			'*--*-',
			'*--*-',
			'*--*-',
			'-**--',
			'-----'
	],
	[
			'--*--',
			'-**--',
			'--*--',
			'--*--',
			'-***-',
			'-----'
	],
	[
			'***--',
			'---*-',
			'-**--',
			'*----',
			'****-',
			'-----'
	],
	[
			'***--',
			'---*-',
			'-**--',
			'---*-',
			'***--',
			'-----'
	],
	[
			'-*---',
			'*--*-',
			'****-',
			'---*-',
			'---*-',
			'-----'
	],
	[
			'****-',
			'*----',
			'***--',
			'---*-',
			'***--',
			'-----'
	],
	[
			'-**--',
			'*----',
			'***--',
			'*--*-',
			'-**--',
			'-----'
	],
	[
			'****-',
			'---*-',
			'--*--',
			'-*---',
			'-*---',
			'-----'
	],
	[
			'-**--',
			'*--*-',
			'-**--',
			'*--*-',
			'-**--',
			'-----'
	],
	[
			'-**--',
			'*--*-',
			'-***-',
			'---*-',
			'-**--',
			'-----'
	]
];

function printDigits(number)
{
	var result = '';
	number = number.toString();

	for (var i = 0; i < digitHeight; i++) {
		for (var j = 0; j < number.length; j++) {
			result += bigDigits[number[j]][i];
		}
		result += '\n';
	}

	return result;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		output.push(printDigits(line.replace(/[^\d]/g,'')));

	} );

console.log( output.join( '' ) );
