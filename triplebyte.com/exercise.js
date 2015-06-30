// Hi, Triplebyte!

'use strict';

function Node(data, next)
{
	this.next = next;
	this.data = data;
}

function List()
{
	this.root = null;
	this.size = 0;
}

List.prototype.append = function(data){
	var newNode = new Node(data, null);
	
	if(this.root === null )
	{
		this.root = newNode;
		this.size++;
		return;
	}
	
	var node = this.root;
	
	while(node.next !== null)
	{
		node = node.next;
	}
	
	node.next = newNode;
	this.size++;
};

List.prototype.print = function()
{
	var node = this.root;
	
	while(node !== null)
	{
		console.log( node.data );
		node = node.next;
	}
	
	console.log('END OF LIST');
}

List.prototype.remove =  function(needle){
	
	// No list.
	if( this.root === null )
		return;
		
	// Root case.
	if( this.root.data === needle )
	{
		this.root = this.root.next;
		this.remove(needle);
		return;
	}
	
	// Tail/Middle case.
	var current = this.root;
	
	while(current !== null && current.next !== null)
	{
		if( current.next.data === needle )
		{
			current.next = current.next.next;
		}
		
		current = current.next;
	}
	
}

var list = new List();

list.append(1);
list.append(2);
list.append(3);
list.append(1);
list.append(2);
list.append(3);

list.remove(2);

list.print();