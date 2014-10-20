var fs = require( "fs" );
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' || line === '\r' ) return;

		var menu = JSON.parse( line ).menu;

		var total = 0;

		menu.items
			.filter( function ( a ) {
				return a !== null && a.label !== undefined;
			} )
			.forEach( function ( item ) {
				total += item.id;
			} );

		console.log( total );

	} );
