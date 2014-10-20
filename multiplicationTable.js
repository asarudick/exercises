function rightPad( width, char, str ) {
	var padding = [];
	padding[ width - str.length - 1 ] = char;

	return padding.join( char ) + str;
}

function multiplicationTable( width, height ) {
	var output = [];

	for ( var i = 1; i <= height; i++ ) {
		var line = [];
		for ( var j = 1; j <= width; j++ ) {
			line.push( rightPad( 4, ' ', ( i * j )
				.toString() ) );
		}
		output.push( line.join( '' ) )
	}
	return output.join( '\n' )
}

console.log( multiplicationTable( 12, 12 ) );
