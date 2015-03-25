var fs = require( "fs" );
function getUniqueElements( arr )
{
	var uniques = {};
	for (var i = 0; i < arr.length; i++) {
		uniques[arr[i]] = true;
	}
	return Object.keys(uniques).join(',');
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		console.log(getUniqueElements(line.split(',')));
	} );
