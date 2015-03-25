
var fs = require('fs');
var output = [];

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		var result = line
						.split('')
						.map( function(a) {
							return Math.pow(a,line.length);
						}).
						reduce( function(a,b){ return a + b; }, 0);

		output.push( (result === parseInt(line,10)? 'True' : 'False' ) );
	});

console.log( output.join( '\n' ) );
