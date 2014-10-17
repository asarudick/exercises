var fs = require( 'fs' );
var output = [];

function arrangeWords( words, indexes )
{
	var buckets = [];

	// Initialize buckets to be empty.
	for (var i = 0; i < words.length; i++) {
		buckets.push(null);
	}

	// Place words in their respective locations.
	for (var i = 0; i < indexes.length; i++) {
		buckets[parseInt(indexes[i],10)-1] = words[i];
	}

	// Find empty bucket and place the missing word in there.
	for (var i = 0; i < buckets.length; i++) {
		if( buckets[i] === null )
		{
			buckets[i] = words[words.length-1];
			break;
		}
	}
	return buckets.join(' ');
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var args = line.split(';');
		
		output.push( arrangeWords(args[0].split(' '), args[1].split(' ')) );
	} );

console.log( output.join( '\n' ) );
