
var fs = require('fs');
var output = [];

function reorder(words, word_map)
{
	var map 	= {},
		result 	= [];

	for (var i = 0; i < words.length; i++) {
		map[word_map[i]] = words[i];
	}

	for (var item in map) {
		if (map.hasOwnProperty(item)) {
			result.push(map[item]);
		}
	}
	return result.join(' ');
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		var args = line.split(';');

		output.push( reorder( args[0].split(' '), args[1].split(' ') )  );
	});

console.log( output.join( '\n' ) );
