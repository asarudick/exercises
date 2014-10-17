var fs = require( 'fs' );
var output = [];

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;

		locations = [0];

		locations = locations
						.concat(line.match(/[\d]+/g))
						.map(function(a){ return parseInt(a,10); })
						.sort(function(a,b){ return a<b ? -1 : (a>b ? 1 : 0)  });

		var distances = [];

		for (var i = 0; i < locations.length-1; i++) {
			distances.push(parseInt(locations[i+1],10) - parseInt(locations[i],10))
		}

		output.push( distances.join(',') );
	} );

console.log( output.join( '\n' ) );
