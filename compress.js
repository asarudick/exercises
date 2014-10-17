
var fs = require('fs');
var output = [];

/**
 * Assumes list is sorted.
 */
function compress(list)
{
	var results = [];

	results.push(1);

	for (var i = 1; i < list.length; i++) {

		if( list[i] === list[i-1] )
		{
			results[results.length-1]++;
			continue;
		}

		results.push(list[i-1]);
		results.push(1);
	}

	results.push(list[list.length-1]);

	return results.join(' ');
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( compress(line.split(' ')) );
	});

console.log( output.join( '\n' ) );
