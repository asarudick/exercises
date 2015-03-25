var fs = require( "fs" );
function getAlternatingIntegers( line )
{
	var stack = line.split(' ');
	var alternates = [];
	while( stack.length )
	{
		alternates.push(stack.pop());
		stack.pop();
	}

	return alternates.join(' ');

}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		console.log( getAlternatingIntegers(line) );
	} );
