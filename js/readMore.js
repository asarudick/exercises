var fs = require( "fs" );

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;

		if( line.length > 55 )
		{
			// Trim up to last 15 characters.
			line = line.slice(0, 40);

			// Trim from last space.
			if( line.lastIndexOf(' ') > -1 )
				line = line.slice(0, line.lastIndexOf(' '));

			line += '... <Read More>';
		}

		console.log(line);
	} );
