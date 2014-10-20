var fs = require( "fs" );

function getExperienceInYears( arr )
{
	var pairs = [];

	for (var i = 0; i < arr.length; i++) {
		var pair = arr[i].split('-');
		var range = {start: new Date(pair[0]), end: new Date(pair[1]) };

		// Set to the end of the month.
		range.end.setMonth(range.end.getMonth()+1);

		pairs.push(range);
	}
	pairs.sort(function(a,b){ return (a.end<b.end ? -1 : (a.end>b.end ? 1 : 0)); });

	// Calculate the total span...
	var total = 0;

	// Then the gaps...
	for (var i = 0; i < pairs.length; i++) {

		total += pairs[i].end - pairs[i].start;

		// Get gap difference. If negative(overlapped), ignore.
		if( i < pairs.length - 1)
		{
			total += Math.min(pairs[i+1].start - pairs[i].end,0);
		}
	}

	return Math.floor(total/(1000*60*60*24*365));
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		console.log( getExperienceInYears( line.split(';') ) );
	} );
