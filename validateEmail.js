var fs = require( "fs" );
var pattern = /^[_A-Za-z0-9-\.\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$|^\"[_A-Za-z0-9-\.\+@]+(\.[_A-Za-z0-9-]+)*\"@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/m;

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line == "" ) return;
		console.log( pattern.test(line)  );
	} );
