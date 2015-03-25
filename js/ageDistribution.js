var fs = require( "fs" );
var ages = [
	{ range: [0,2], message: 'Still in Mama\'s arms'},
	{ range: [3,4], message: 'Preschool Maniac'},
	{ range: [5,11], message: 'Elementary school'},
	{ range: [12,14], message: 'Middle school'},
	{ range: [15,18], message: 'High school'},
	{ range: [19,22], message: 'College'},
	{ range: [23,65], message: 'Working for the man'},
	{ range: [66,100], message: 'The Golden Years'},
];
function getAgeMessage( age ) {
	'use strict';

	var result = '';

	for (var i = 0; i < ages.length; i++) {
		if( age >= ages[i].range[0] && age <= ages[i].range[1] )
			return ages[i].message;
	}

	return 'This program is for humans';
}
fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		console.log( getAgeMessage( parseInt(line,10) ) );
	} );
