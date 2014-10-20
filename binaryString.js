var fs = require( "fs" );

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		var arr = line.split(' ');
		var pairs = [];
		for (var i = 0; i < arr.length; i = i + 2) {
			pairs.push( { flag: arr[i], value: arr[i+1] });
		}

		var output = parseInt(pairs.map(function(a){
			if( a.flag === '00' )
				return a.value.replace(/0/g, '1');

			return a.value;
		}).join(''),2);

		console.log(output);
	} );
