
var fs = require('fs');
var output = [];

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function toSeconds(time)
{
	'use strict';

	var units = time.match(/\d+/g);

	return (parseInt(units[0],10) * 3600) + (parseInt(units[1],10) * 60) + parseInt(units[2],10);
}

function toTime(seconds)
{
	'use strict';

	var hours = Math.floor(seconds / 3600);
	seconds %= 3600;
	var minutes = Math.floor(seconds / 60);
	seconds %= 60;

	return pad(hours,2) + ':' + pad(minutes,2) + ':' + pad(seconds,2);
}
fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		var args = line.split(' ');

		output.push( toTime(Math.abs( toSeconds(args[0]) - toSeconds(args[1]) )) );
	});

console.log( output.join( '\n' ) );
