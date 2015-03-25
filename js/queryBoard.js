var fs = require( 'fs' );
var output = [];

function QueryBoard( width, height ) {
	this.board = [[]];

	// Initialize board.
	for ( var i = 0; i < height; i++ ) {
		this.board[ i ] = [];
		for ( var j = 0; j < width; j++ ) {
			this.board[ i ].push(0);
		}
	}

}

QueryBoard.prototype = {
	getRow: function ( row ) {
		return this.board[ row ].reduce( function ( a, b ) {
			return parseInt(a,10) + parseInt(b,10);
		}, 0 );
	},
	getColumn: function ( column ) {
		var col = [];

		for (var i = 0; i < this.board.length; i++) {
			col.push(this.board[i][column]);
		}

		return col.reduce(function(a,b){ return parseInt(a,10) + parseInt(b,10); });
	},
	setRow: function ( row, value ) {
		this.board[ row ] = this.board[ row ].map( function () {
			return value;
		}, 0 );
	},
	setColumn: function ( column, value ) {
		for (var i = 0; i < this.board.length; i++) {
			this.board[i][column] = value;
		}
	}

};

var queryBoard = new QueryBoard(256,256);

fs.readFileSync( process.argv[ 2 ] )
	.toString()
	.split( '\n' )
	.forEach( function ( line ) {
		if ( line === '' ) return;
		var args = line.split(' ');

		switch( args[0] )
		{
			case 'SetRow':
				queryBoard.setRow( args[1], args[2] );
				break;
			case 'SetCol':
				queryBoard.setColumn( args[1], args[2] );
				break;
			case 'QueryRow':
				output.push( queryBoard.getRow(args[1]) );
				break;
			case 'QueryCol':
				output.push( queryBoard.getColumn(args[1]) );
				break;
		}
	} );

console.log( output.join( '\n' ) );
