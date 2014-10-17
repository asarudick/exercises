
var fs = require('fs');
var output = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var escapables = {'*': true};
function substr(haystack, needle)
{
	'use strict';

	for (var i = 0; i < haystack.length; i++) {

		var scanned = 0;
		for (var j = 0; j < needle.length && i+scanned < haystack.length; j++) {

			// We found an escapable character. Ignore the slash.
			if( i+scanned+1 < haystack.length && haystack[i+scanned] == '\\' && escapables[haystack[i+scanned+1]] !== undefined )
			{
				continue;
			}

			// Found a wildcard.
			if( needle[j] == '*' )
			{
				// var newHaystack = Array.prototype.slice.call(haystack, i+scanned, haystack.length).join('');
				// var newNeedle = Array.prototype.slice.call(needle, j+1, needle.length).join('');
				// var val = substr( Array.prototype.slice.call(haystack, i+scanned, haystack.length).join(''), Array.prototype.slice.call(needle, j+1, needle.length).join('') );
				// console.log('Found wildcard. haystack: ' + newHaystack + ', needle: ' + newNeedle + ', val: ' + val);
				if( substr( Array.prototype.slice.call(haystack, i+scanned, haystack.length).join(''), Array.prototype.slice.call(needle, j+1, needle.length).join('') ) > -1 )
				{
					return i;
				}
			}

			// Current character doesn't match.
			if( haystack[i+scanned] != needle[j] )
				break;

			scanned++;

			// End of the comparison, and no errors yet. We found it.
			if ( j === needle.length - 1 )
			{
				return i;
			}

		}
		i += Math.max(0,scanned-1);
	}

	return -1;
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		'use strict';
		if ( line === '' ) return;

		output.push( substr.apply(null, line.split(',')) > -1 );
	});

console.log( output.join( '\n' ) );
