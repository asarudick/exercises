(function() {
	'use strict';

	function Node(data, next)
	{
		this.next = next;
		this.data = data;
	}

	function List()
	{
		this.size = 0;

		// Sentinels never have data themselves. They only serve to make list
		// operations easier. They'll always point to the head, if there is a head.
		this.sentinel = new Node(null, null);
	}
	List.prototype = {
		append: function(){

			var values = Array.prototype.slice.call(arguments);

			for (var i = 0; i < values.length; i++) {
				var node = this.sentinel;

				while( node.next !== null )
				{
					node = node.next;
				}

				node.next = new Node(values[i], null);
				this.size++;
			}
		},
		prepend: function(){

			var values = Array.prototype.slice.call(arguments);

			// Work backwards, otherwise arguments will be in reverse order in
			// the list.
			for (var i = values.length - 1; i >= 0; i--) {
				this.sentinel.next = new Node(values[i], this.sentinel.next);
				this.size++;
			}
		},
		toArray: function() {
			var node = this.sentinel.next;
			var result = [];
			while(node !== undefined && node !== null)
			{
				result.push(node.data);
				node = node.next;
			}
			return result;
		},
		insertBefore: function(data, i){
			var node = this.sentinel;
			var index = -1;

			// Find the position prior to the index.
			while( node.next !== null && i-1 !== index)
			{
				index++;
				node = node.next;
			}

			node.next = new Node(data, node.next);
		},
		insertAfter: function(data, i){
			var node = this.sentinel;
			var index = -1;
			while( node.next !== null && i !== index)
			{
				index++;
				node = node.next;
			}

			node.next = new Node(data, node.next);
		},

		replace: function(search, value){
			this.map(function(data) {
				if( data === search )
			  		return value;
				return data;
			});
		},
		replaceAtIndex: function(i, value){

			// At the head.
			var node = this.sentinel.next;
			var index = 0;

			// Iterate until we hit the index, or the end.
			while( node !== null )
			{
				// Stop at the index and change the data.
				if( i === index )
				{
					node.data = value;
					return;
				}

				index++;
				node = node.next;
			}
		},
		replaceFirst: function(search, value){
			var node = this.sentinel.next;

			while( node !== null )
			{
				if(node.data === search)
				{
					node.data = value;
					return;
				}
				node = node.next;
			}
		},
		replaceLast: function(search, value){
			var node = this.sentinel.next;
			var last = null;

			while( node !== null )
			{
				if(node.data === search)
				{
					last = node;
				}
				node = node.next;
			}

			if( last !== null )
				last.data = value;
		},

		// Analog of Array.prototype.indexOf
		indexOf: function(search){
			var index = -1;

			var node = this.sentinel.next;

			while(node !== null)
			{
				index++;
				if( node.data === search )
				{
					return index;
				}
				node = node.next;
			}

			return index;
		},
		lastIndexOf: function(search){
			var index = -1;
			var lastIndex = -1;

			var node = this.sentinel.next;

			while(node !== null)
			{
				if( node.data === search )
				{
					lastIndex = index;
				}
				node = node.next;
				index++;
			}

			return lastIndex;
		},

		// Analog of the Array.prototype.reduce function.
		reduce: function(cb, initialValue){
			var result = initialValue;
			var node = this.sentinel.next;

			while (node !== null)
			{
				result = cb(result, node.data);
				node = node.next;
			}

			return result;
		},

		// Executes a callback on each node's data.
		map: function(cb){
			var node = this.sentinel.next;
			while(node !== null)
			{
				node.data = cb(node.data);
				node = node.next;
			}
		},

		// Produces a new list containing the nodes that pass the filter.
		filter: function(cb){
			var result = new List();

			var node = this.sentinel.next;
			while(node !== null)
			{
				if( cb(node.data) )
				{
					result.append(node.data);
				}
				node = node.next;
			}

			return result;
		},

		// Prints out the data of each node.
		print: function(){
			this.map(function(data){
				console.log(data);
			});
		},

		removeAtIndex: function(i)
		{
			var index = -1;
			var previous = this.sentinel;
			var current = this.sentinel;

			// Iterate over the nodes.
			while( current.next !== null )
			{
				if( i === index+1 )
				{
					current.next = current.next.next;
					this.size--;
					return;
				}

				index++;

				current = current.next;

				if( current.next !== null)
					previous = current;
			}

			// Remove the last node if it matches.
			if( previous.next !== null && i === index+1 )
			{
				previous.next = null;
				this.size--;
			}
		},

		removeAll: function(search) {
			var previous = this.sentinel;
			var current = this.sentinel;

			while( current.next !== null )
			{
				if( current.next.data === search )
				{
					current.next = current.next.next;
					this.size--;
					continue;
				}

				current = current.next;

				if( current.next !== null)
					previous = current;
			}

			// Remove the last node if it matches.
			if( previous.next !== null && previous.next.data === search )
			{
				previous.next = null;
				this.size--;
			}
		}

	}

	module.exports = List;
}());
