
var fs = require('fs');
var output = [];

function intersect(firstSet, secondSet)
{
		var firstHash = {};
		var result = [];

		for (var i = 0; i < firstSet.length; i++) {
			firstHash[firstSet[i]] = 0;
		}
		for (var i = 0; i < secondSet.length; i++) {
			if( firstHash[secondSet[i]] !== undefined )
				result.push(secondSet[i]);
		}

		return result;
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		var lists = line.split(';');

		output.push( intersect(lists[0].split(','), lists[1].split(',')) );
	});

console.log( output.join( '\n' ) );
