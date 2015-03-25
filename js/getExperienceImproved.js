var fs = require( "fs" );

var minDate = new Date('Jan 01 1990');

function getMonthDiff( start, end )
{
	return end.getMonth() - start.getMonth() + (12 * (end.getFullYear() - start.getFullYear()));
}

function getExperienceInYears( arr )
{
	var monthsOfExperience = {};
	var total = 0;

	for (var i = 0; i < arr.length; i++) {
		
		var pair = arr[i].split('-');

		var start = getMonthDiff( minDate, new Date(pair[0]) );
		var end = getMonthDiff(minDate, new Date(pair[1]) );

		for (var j = start; j <= end; j++) {
			if( monthsOfExperience[j] === undefined )
			{
				monthsOfExperience[j] = true;
				total++;
			}
		}
	}

	return Math.floor(total/12);
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if( line === '' ) return;
		console.log( getExperienceInYears( line.split(';') ) );
	} );
