var fs = require( "fs" );


var opening = /\{|\(|\[/,
	closing = /\}|\)|\]/;

var testExpression = function ( str ) {

	var errors = 0,
		stack = [],
		counterParts = {
			'}': '{',
			']': '[',
			')': '('
		};

	for ( var i = 0; i < str.length; i++ ) {
		if ( opening.test( str[ i ] ) )
			stack.push( str[ i ] );
		else if ( closing.test( str[ i ] ) && counterParts[ str[ i ] ] != stack.pop() )
			errors++;
	}

	return ( errors === 0 && stack.length === 0 );
};

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line == "" ) return;

		console.log(testExpression( line ) ? 'True' : 'False');
	} );
