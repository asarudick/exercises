var fs = require( 'fs' );
function getBestSum( arr )
{
	var best = arr[0];

	for (var start = 0; start < arr.length; start++) {
		for (var end = start; end < arr.length; end++) {
			var sum = arr.slice(start,end+1).reduce( function(a,b){ return a+b;},0);
			best = Math.max(sum, best);
		}
	}

	return best;
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;


		var ints = line.split( ',' )
			.map( function ( a ) {
				return parseInt( a.trim(), 10 );
			} );

		console.log( getBestSum(ints) );
	} );
