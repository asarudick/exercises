
var fs = require('fs');
var output = [];

function swapElements( arr, first, second )
{
	var tmp = arr[first];
	arr[first] = arr[second];
	arr[second] = tmp;
}

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

		var args = line.split(':');
		var arr = args[0].split(' ');
		arr.length = arr.length - 1;
		var swaps = args[1].split(',');

		swaps.forEach(function(a){
			var swapArgs = a.split('-');
			swapElements( arr, parseInt(swapArgs[0],10), parseInt(swapArgs[1],10));
		});

		output.push( arr.join(' ') );
	});

console.log( output.join( '\n' ) );
