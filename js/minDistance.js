var fs = require( 'fs' );
var output = [];

var findTotalHouseDistance = function(house, locations)
{
	'use strict';

	var rightHouse = Math.ceil(house);
	var leftHouse = Math.floor(house);

	var rightHouseTotalDistance = locations.reduce( function(a,b) { return a + Math.abs(rightHouse-b);}, 0);
	var leftHouseTotalDistance = locations.reduce( function(a,b) { return a + Math.abs(leftHouse-b);}, 0);

	return (rightHouseTotalDistance < leftHouseTotalDistance ) ? rightHouseTotalDistance : leftHouseTotalDistance;

}

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {

		'use strict';

		if ( line === '' ) return;

		var args = [];

		// Parse arguments.
		args = args
				.concat(line.match(/[\d]+/g))
				.map( function(a) { return parseInt(a,10); } );

		// First arg is the number of friends.
		var numOfFriends = args[0];

		// The rest are the locations.
		var locations = args;

		// Remove first element. It's the number of friends.
		locations.shift();

		// Sum and average to get the midpoint.
		var midpoint = locations.reduce( function(a,b){ return a + b; }, 0) / numOfFriends;


		output.push( findTotalHouseDistance(midpoint, locations) );

	} );

console.log( output.join( '\n' ) );
