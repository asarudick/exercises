
var fs = require('fs');
var output = [];

function swapCase(line)
{
	line = line.split('');
	for (var i = 0; i < line.length; i++) {
		if( /[A-Z]+/g.test(line[i]) === true )
		{
			line[i] = line[i].toLowerCase();
		}
		else
			line[i] = line[i].toUpperCase();
	}

	return line.join('');
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		output.push( swapCase(line) );
	});

console.log( output.join( '\n' ) );
