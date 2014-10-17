
var fs = require('fs');
var output = [];

/**
 * Assumes list is sorted.
 */
function longestWord(line)
{
	var max = 0;
	var maxIndex = 0;

	var words = line.split(' ');

	for (var i = 0; i < words.length; i++) {
		if( words[i].length > max )
		{
			max = words[i].length;
			maxIndex = i;
		}
	}

	return words[maxIndex];
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( longestWord(line) );
	});

console.log( output.join( '\n' ) );
