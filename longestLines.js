
var fs = require('fs');
var lines = [];
var n;

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		if ( n === null || n === undefined ) {
			n = parseInt(line, 10);
		}
		lines.push(line);
	});

console.log( lines.sort( function(a,b){ return b.length - a.length; } ).slice(0,n).join( '\n' ) );
