
var fs = require('fs');
var output = [];

var Terminal = function(width, height){
	this.modes = {
		overwrite : 0,
		insert : 1
	};

	this.cursor = {row: 0, col: 0};
	this.screen = [[]];
	this.mode = modes.overwrite;
	this.width = width;
	this.height = height;

	this.clear();
}

Terminal.prototype = {
	parse: function( str ) {
		var commands = str.match(/(\^(c|h|b|d|u|l|r|e|i|o|\^|\d{2})|[A-za-z0-9\_\.\=\+\-])/g);
	}
	execute: function( command ) {

	},
	clear: function()
	{
		for (var row = 0; row < this.height; row++) {
			for (var col = 0; col < this.width; col++) {
				array[row][col] = ' ';
			}
		}
	},
	setCursorPosition: function(x, y)
	{
		this.cursor = {row: x, col: y};
	},
	moveCursorToRowStart: function()
	{
		this.cursor.col = 0;
	},
	moveCursorDown: function()
	{
		if( cursor.row >= this.height - 1)
			cursor.row++;
	},
	moveCursorUp: function()
	{
		if( cursor.row <= 0 )
			cursor.row--;
	},
	moveCursorLeft: function()
	{
		if( cursor.col <= 0 )
			cursor.col--;
	},
	moveCursorRight: function() {
		if( cursor.col >= this.width - 1)
			cursor.col++;
	},
	eraseRight: function() {
		for (var i = this.cursor.col; i < this.width; i++) {
			array[this.cursor.row][i]
		}
	},
	setMode: function(mode) {
		this.mode = mode;
	},
	printScreen: function()
	{
		var output = [];

		for (var row = 0; row < this.screen.length; row++) {
			output.push(this.screen[row].join(''));
		}

		return output.join('\n');
	},
	setValue: function(value)
	{
		if( this.mode === this.modes.overwrite )
			this.screen[this.cursor.row][this.cursor.column] = value;
		else
		{
			this.screen[this.cursor.row].splice(this.cursor.column, 0, value);
			this.screen[this.cursor.row].pop();
		}
	}

}

var terminal = new Terminal(10,10);

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\r\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;

	});

console.log( output.join( '\n' ) );
