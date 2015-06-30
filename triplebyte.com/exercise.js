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
		this.size--;
		this.remove(needle);
		return;
	}
	
	// At this point we know the data !== needle for the root. If there's only
	// root in this list, return.
	if( this.root.next === null )
		return;
		
	// Middle case.
	// We know that the root doesn't have a match, and the list has at least
	// size 2.
	var current = this.root;
	var previous = this.root;
	
	do
	{
		
		// Remove matching node, and join its previous and next.
		if( current.next.data === needle )
		{
			// Orphan the matching node, and don't advance, since we have a new
			// next node to evaluate, but do restart loop.
			current.next = current.next.next;
			this.size--;
			continue;
		}
		
		// Advance through the list.
		current = current.next;
		
		// Save reference to current node if we're not at the end.
		if( current.next !== null)
			previous = current;
	}
	// Stop right before the last node. Previous should have a reference to the
	// next to last node.
	while(current !== null && current.next !== null);
		
	// Remove the last node if it matches.
	if( previous.next !== null && previous.next.data === needle )
	{
		previous.next = null;
		this.size--;
	}
	
}

var list = new List();

console.log('(1) - Remove `1`.')
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(1)->(1) Remove `1`.')
list.append(1);
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(1)->(1)->(1) Remove `1`.')
list.append(1);
list.append(1);
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(1)->(1)->(1)->(1) Remove `1`.')
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(1)->(1)->(1)->(1)->(1) Remove `1`.')
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(2)->(1)->(1)->(1)->(1) Remove `1`.')
list.append(2);
list.append(1);
list.append(1);
list.append(1);
list.append(1);
list.remove(1);

list.print();
list = new List();




console.log('(1)->(2) Remove `1`.')
list.append(1);
list.append(2);
list.remove(1);

list.print();
list = new List();

console.log('(1)->(2)->(2) Remove `1`.')
list.append(1);
list.append(2);
list.append(2);
list.remove(1);

list.print();
list = new List();

console.log('(2)->(1) Remove `1`.')
list.append(2);
list.append(1);
list.remove(1);

list.print();
list = new List();


console.log('(2)->(2)->(1) Remove `1`.')
list.append(2);
list.append(2);
list.append(1);
list.remove(1);

list.print();
list = new List();

console.log('(2)->(2)->(2)->(1) Remove `1`.')
list.append(2);
list.append(2);
list.append(2);
list.append(1);
list.remove(1);

list.print();
list = new List();