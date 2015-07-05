var List = require("../src/List.js");
var assert = require('assert');

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
	// if the other array is a falsy value, return
	if (!array)
	return false;

	// compare lengths - can save a lot of time
	if (this.length != array.length)
	return false;

	for (var i = 0, l = this.length; i < l; i++) {
		// Check if we have nested arrays
		if (this[i] instanceof Array && array[i] instanceof Array) {
			// recurse into the nested arrays
			if (!this[i].equals(array[i]))
			return false;
		}
		else if (this[i] != array[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}

// var list = new List();
//
// console.log('(1) - Remove `1`.')
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(1)->(1) Remove `1`.')
// list.append(1);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(1)->(1)->(1) Remove `1`.')
// list.append(1);
// list.append(1);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(1)->(1)->(1)->(1) Remove `1`.')
// list.append(1);
// list.append(1);
// list.append(1);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(1)->(1)->(1)->(1)->(1) Remove `1`.')
// list.append(1);
// list.append(1);
// list.append(1);
// list.append(1);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(2)->(1)->(1)->(1)->(1) Remove `1`.')
// list.append(2);
// list.append(1);
// list.append(1);
// list.append(1);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
//
//
//
// console.log('(1)->(2) Remove `1`.')
// list.append(1);
// list.append(2);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(1)->(2)->(2) Remove `1`.')
// list.append(1);
// list.append(2);
// list.append(2);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(2)->(1) Remove `1`.')
// list.append(2);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
//
// console.log('(2)->(2)->(1) Remove `1`.')
// list.append(2);
// list.append(2);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(2)->(2)->(2)->(1) Remove `1`.')
// list.append(2);
// list.append(2);
// list.append(2);
// list.append(1);
// list.removeAll(1);
//
// list.print();
// list = new List();
//
// console.log('(2)->(2)->(2)->(1) Remove at 1.')
// list.append(2);
// list.append(2);
// list.append(2);
// list.append(1);
// list.removeAtIndex(1);
// list.print();

describe('List', function(){
	var list;
	describe('#append(1,2,3)', function(){
		it('should append all parameters', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal([ 1, 2, 3 ].length, list.toArray().length);
			assert.equal(3, list.size);
		});
	});
	describe('#prepend(1,2,3)', function(){
		it('should prepend all parameters', function(){
			list = new List();
			list.prepend(1,2,3);
			assert.equal([ 1, 2, 3 ].length, list.toArray().length);
			assert.equal(3, list.size);
		});
	});
	describe('#toArray()', function(){
		it('should return [1,2,3]', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertBefore(1,0)', function(){
		it('should insert before the head.', function(){
			list = new List();
			list.append(2,3);
			list.insertBefore(1,0);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertBefore(2,1)', function(){
		it('should insert before the tail.', function(){
			list = new List();
			list.append(1,3);
			list.insertBefore(2,1);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertBefore(3,2)', function(){
		it('should insert at the tail.', function(){
			list = new List();
			list.append(1,2);
			list.insertBefore(3,2);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertBefore(3,50)', function(){
		it('should insert at the tail.', function(){
			list = new List();
			list.append(1,2);
			list.insertBefore(3,2);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertAfter(2,0)', function(){
		it('should insert after the head.', function(){
			list = new List();
			list.append(1,3);
			list.insertAfter(2,0);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertAfter(1,-1)', function(){
		it('should insert at the head.', function(){
			list = new List();
			list.append(2,3);
			list.insertAfter(1,-1);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertAfter(3,2)', function(){
		it('should insert at the tail.', function(){
			list = new List();
			list.append(1,2);
			list.insertAfter(3,2);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#insertAfter(3,50)', function(){
		it('should insert after the tail.', function(){
			list = new List();
			list.append(1,2);
			list.insertAfter(3,50);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#replace(2,5)', function(){
		it('should all 2s with 5s.', function(){
			list = new List();
			list.append(2,1,2,3,2,5,2);
			list.replace(2,5);
			assert.equal(true, list.toArray().equals([5,1,5,3,5,5,5]));
		})
	});
	describe('#replaceAtIndex(0, 5)', function(){
		it('should replace head element with a 5.', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceAtIndex(0,5);
			assert.equal(true, list.toArray().equals([5,2,3]));
		})
	});
	describe('#replaceAtIndex(2, 5)', function(){
		it('should replace tail element with a 5.', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceAtIndex(2,5);
			assert.equal(true, list.toArray().equals([1,2,5]));
		})
	});
	describe('#replaceAtIndex(-1, 5)', function(){
		it('should fail silently', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceAtIndex(-1,5);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#replaceAtIndex(3, 5)', function(){
		it('should fail silently', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceAtIndex(3,5);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	// describe('#indexOf()', function(){
	// 	list = new List();
	// 	it('should return -1 when the value is not present', function(){
	// 		assert.equal(-1, [1,2,3].indexOf(5));
	// 		assert.equal(-1, [1,2,3].indexOf(0));
	// 	})
	// })
})
