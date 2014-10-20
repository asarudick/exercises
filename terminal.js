var fs = require( 'fs' );
var output = [];

var Terminal = function ( width, height ) {
	this.modes = {
		overwrite: 0,
		insert: 1
	};

	this.cursor = {
		row: 0,
		col: 0
	};
	this.screen = [
		[]
	];


	this.mode = this.modes.overwrite;
	this.width = width;
	this.height = height;

	this.clear();

	this.commands = {
		'^c': function () {
			this.clear();
		},
		'^h': function () {
			this.setCursorPosition(0,0);
		},
		'^b': function () {
			this.moveCursorToRowStart();
		},
		'^d': function () {
			this.moveCursorDown();
		},
		'^u': function () {
			this.moveCursorUp();
		},
		'^l': function () {
			this.moveCursorLeft();
		},
		'^r': function () {
			this.moveCursorRight();
		},
		'^e': function () {
			this.eraseRight();
		},
		'^i': function () {
			this.setMode(this.modes.insert);
		},
		'^o': function () {
			this.setMode(this.modes.overwrite);
		},
		'^^': function () {
			this.setValue('^');
		}
	};
}

Terminal.prototype = {
	parse: function ( str ) {
		var commands = str.match(
			/(\^(c|h|b|d|u|l|r|e|i|o|\^|\d{2})|[A-za-z0-9\_\.\=\+\-])/g );

		for ( var i = 0; i < commands.length; i++ ) {
			console.log('Executing: ' + commands[i]);
			this.execute(commands[i]);
		}

	},
	execute: function( command ) {
		var matches;

		if ( matches = command.match( /\^\d{2}/g ) )
		{
			this.setCursorPosition( matches[ 0 ][ 1 ], matches[ 0 ][ 2 ] );
		}
		else if ( this.commands[ command ] !== undefined )
			this.commands[ command ].call(this);

		else
			this.setValue( command );
	},
	clear: function () {
		for ( var row = 0; row < this.height; row++ ) {
			if( this.screen[row] === undefined ) this.screen[row] = [];
			for ( var col = 0; col < this.width; col++ ) {
				if( this.screen[row][col] === undefined ) this.screen[row][col] = [];
				this.screen[ row ][ col ] = ' ';
			}
		}
	},
	setCursorPosition: function ( x, y ) {
		this.cursor = {
			row: x,
			col: y
		};
	},
	moveCursorToRowStart: function () {
		this.cursor.col = 0;
	},
	moveCursorDown: function () {
		if ( this.cursor.row >= this.height - 1 )
			this.cursor.row++;
	},
	moveCursorUp: function () {
		if ( this.cursor.row <= 0 )
			this.cursor.row--;
	},
	moveCursorLeft: function () {
		if ( this.cursor.col <= 0 )
			this.cursor.col--;
	},
	moveCursorRight: function () {
		if ( this.cursor.col >= this.width - 1 )
			this.cursor.col++;
	},
	eraseRight: function () {
		for ( var i = this.cursor.col; i < this.width; i++ ) {
			this.screen[ this.cursor.row ][ i ] = ' ';
		}
	},
	setMode: function ( mode ) {
		this.mode = mode;
	},
	printScreen: function () {
		var output = [];

		for ( var row = 0; row < this.screen.length; row++ ) {
			output.push( this.screen[ row ].join( '' ) );
		}

		return output.join( '\n' );
	},
	setValue: function ( value ) {
		if ( this.mode === this.modes.overwrite )
			this.screen[ this.cursor.row ][ this.cursor.column ] = value;
		else {
			this.screen[ this.cursor.row ].splice( this.cursor.column, 0, value );
			this.screen[ this.cursor.row ].pop();
		}
	}

}

var terminal = new Terminal( 10, 10 );

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\r\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		terminal.parse(line);
	} );

console.log(terminal.printScreen());
