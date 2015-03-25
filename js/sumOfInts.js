var fs = require( 'fs' );

var sum = fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.map( function ( line ) {
		if ( line === '' ) return 0;
		return parseInt(line,10);
	} )
	.reduce(function(a,b){return a+b;});

console.log( sum );
