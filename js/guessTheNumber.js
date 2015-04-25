'use strict';

var fs = require( "fs" );

// Returns half of a range, where 'upper'(boolean) parameter specifies the upper(true) or lower(false) half
var bisect = function(min,max,pivot,upper) {
	if( upper )
		return [pivot+1, max];
	return [min, pivot-1];
}

var getMiddlePivot = function(min,max) {
	return Math.ceil(((max-min)/2)+min);
}

var guessTheNumber = function(lower, upper, sequence) {
	var number = 0;
	var currentRange = [lower,upper];
	var pivot;

	sequence.forEach(function(item) {

		// Get the middle number.
		pivot = getMiddlePivot(currentRange[0], currentRange[1]);

		// If the guess response is "Yay!", we're done.
		if( item !== "Yay!" )
			currentRange = bisect(currentRange[0], currentRange[1], pivot, (item === "Higher" ? true : false ) );
	});

	return pivot;
}
fs.readFileSync( process.argv[ 2 ] )
    .toString()
    .split( '\n' )
    .filter( function ( line ) {
        return line !== "";
    } )
    .forEach( function ( line ) {
        var args = line.split( ' ' );

		// First is the upper bound. Lower bound is always 0.
		var upper = parseInt(args.shift(), 10);

		var lower = 0;

		console.log(guessTheNumber(lower, upper, args));

    } );
