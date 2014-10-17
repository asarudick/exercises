var fs = require( 'fs' );
var output = [];

var greatestN = function ( x, n ) {
	'use strict';
	var coef = 0;

	while ( (coef*n) < x ) {
		coef++;
	}

	return coef*n;
};
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		'use strict';
		if ( line === '' ) return;
		var max = 0;
		output.push( greatestN.apply(null, line.split(',').map(function(a){return parseInt(a,10);}) ) );
	} );

console.log( output.join( '\n' ) );
