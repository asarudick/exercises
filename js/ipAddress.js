var fs = require( "fs" );


var ips = {};
var ipRegex = new RegExp(
	[
	'((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))',
	'((0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2}))',
	'(([0-8]{4})\.([0-8]{4})\.([0-8]{4})\.([0-8]{4}))',
	'((0|1){32}|(0|1){8}\.(0|1){8}\.(0|1){8}\.(0|1){8})',
	'([0-8]{12})',
	'(0x[0-9a-fA-F]{8})',
	'(\d{12})'
	]
	.join('|'), 'g');

function validIP( ip )
{

	return false;
}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;

		var matches = line.match(ipRegex);

		console.log(matches);
	} );
