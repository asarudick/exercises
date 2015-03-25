/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
String.prototype.repeat = function ( num ) {
	'use strict';

	return new Array( num + 1 )
		.join( this );
};

var justify = function ( str, len ) {
	'use strict';

	var splitString = str.split( ' ' );

	for ( var i = 0, totalLength = 0; i < splitString.length; i++ ) {
		if ( totalLength + splitString[ i ].length < len ) {
			continue;
		}
		splitString.splice( i - 1, 0, '\n' );
		totalLength = 0;
	}

	var lines = splitString
		.join( '' )
		.split( '\n' );

	for ( var i = 0; i < lines.length - 1; i++ ) {

		var currentLineWords = lines[ i ].split( ' ' );
		var spaceCount = len - lines[ i ].length;
		var spaceLeftOvers = spaceCount % ( currentLineWords - 1 );
		var spacePerWord = ( spaceCount - spaceLeftOvers ) / ( currentLineWords - 1 );

		for ( var j = 0; j < currentLineWords.length - 1; i++ ) {
			currentLineWords[ j ] += ' '.repeat( spacePerWord + spaceLeftOvers-- );
		}

		lines[ i ] = currentLineWords.join( '' );
	}


};

justify(
	'rabble rabble rabble. Ole Miss doesn\'t stand a chance against the Elephants.',
	10 );