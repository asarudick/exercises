var List = require("../List.js");
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
	describe('#replaceFirst(2, 5)', function(){
		it('should replace the first instance of 2', function(){
			list = new List();
			list.append(1,2,3,2);
			list.replaceFirst(2,5);
			assert.equal(true, list.toArray().equals([1,5,3,2]));
		})
	});
	describe('#replaceFirst(1, 5)', function(){
		it('should replace the first instance of 1(head)', function(){
			list = new List();
			list.append(1,2,3,2);
			list.replaceFirst(1,5);
			assert.equal(true, list.toArray().equals([5,2,3,2]));
		})
	});
	describe('#replaceFirst(3, 5)', function(){
		it('should replace the first instance of 3(tail)', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceFirst(3,5);
			assert.equal(true, list.toArray().equals([1,2,5]));
		})
	});
	describe('#replaceFirst(0, 5)', function(){
		it('should replace nothing.', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceFirst(0,5);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#replaceLast(2, 5)', function(){
		it('should replace the first instance of 2', function(){
			list = new List();
			list.append(1,2,3,2);
			list.replaceLast(2,5);
			assert.equal(true, list.toArray().equals([1,2,3,5]));
		})
	});
	describe('#replaceLast(1, 5)', function(){
		it('should replace the first instance of 1(head)', function(){
			list = new List();
			list.append(1,2,3,2);
			list.replaceLast(1,5);
			assert.equal(true, list.toArray().equals([5,2,3,2]));
		})
	});
	describe('#replaceLast(3, 5)', function(){
		it('should replace the first instance of 3(tail)', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceLast(3,5);
			assert.equal(true, list.toArray().equals([1,2,5]));
		})
	});
	describe('#replaceLast(0, 5)', function(){
		it('should replace nothing.', function(){
			list = new List();
			list.append(1,2,3);
			list.replaceLast(0,5);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#indexOf(1)', function(){
		it('should return 0', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(0, list.indexOf(1));
		})
	});
	describe('#indexOf(2)', function(){
		it('should return 1', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(1, list.indexOf(2));
		})
	});
	describe('#indexOf(3)', function(){
		it('should return 2', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(2, list.indexOf(3));
		})
	});
	describe('#indexOf(4)', function(){
		it('should return -1', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(-1, list.indexOf(4));
		})
	});
	describe('#indexOf(1)', function(){
		it('should return 0', function(){
			list = new List();
			list.append(1,2,3,1);
			assert.equal(0, list.indexOf(1));
		})
	});
	describe('#lastIndexOf(1)', function(){
		it('should return 0', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(0, list.lastIndexOf(1));
		})
	});
	describe('#lastIndexOf(2)', function(){
		it('should return 1', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(1, list.lastIndexOf(2));
		})
	});
	describe('#lastIndexOf(3)', function(){
		it('should return 2', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(2, list.lastIndexOf(3));
		})
	});
	describe('#lastIndexOf(4)', function(){
		it('should return -1', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(-1, list.lastIndexOf(4));
		})
	});
	describe('#lastIndexOf(1)', function(){
		it('should return 3', function(){
			list = new List();
			list.append(1,2,3,1);
			assert.equal(3, list.lastIndexOf(1));
		})
	});
	describe('#reduce(+)', function(){
		it('should return 6', function(){
			list = new List();
			list.append(1,2,3);
			assert.equal(6, list.reduce(function(a,b){
				return a + b;
			}));
		})
	});
	describe('#map(+1)', function(){
		it('should return [2,3,4]', function(){
			list = new List();
			list.append(1,2,3);
			list.map(function(a){
				return a + 1;
			});
			assert.equal(true, list.toArray().equals([2,3,4]));
		})
	});
	describe('#filter(<3)', function(){
		it('should return [1,2]', function(){
			list = new List();
			list.append(1,2,3);
			var filtered = list.filter(function(a){
				return a < 3;
			});
			assert.equal(true, filtered.toArray().equals([1,2]));
		})
	});
	describe('#removeAtIndex(0)', function(){
		it('should return [2,3]', function(){
			list = new List();
			list.append(1,2,3);
			list.removeAtIndex(0);
			assert.equal(true, list.toArray().equals([2,3]));
		})
	});
	describe('#removeAtIndex(1)', function(){
		it('should return [1,3]', function(){
			list = new List();
			list.append(1,2,3);
			list.removeAtIndex(1);
			assert.equal(true, list.toArray().equals([1,3]));
		})
	});
	describe('#removeAtIndex(2)', function(){
		it('should return [1,2]', function(){
			list = new List();
			list.append(1,2,3);
			list.removeAtIndex(2);
			assert.equal(true, list.toArray().equals([1,2]));
		})
	});
	describe('#removeAtIndex(-1)', function(){
		it('should return [1,2,3]', function(){
			list = new List();
			list.append(1,2,3);
			list.removeAtIndex(-1);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#removeAtIndex(3)', function(){
		it('should return [1,2,3]', function(){
			list = new List();
			list.append(1,2,3);
			list.removeAtIndex(3);
			assert.equal(true, list.toArray().equals([1,2,3]));
		})
	});
	describe('#removeAll(3)', function(){
		it('should return [1,2]', function(){
			list = new List();
			list.append(3,3,1,3,3,2,3,3);
			list.removeAll(3);
			assert.equal(true, list.toArray().equals([1,2]));
		})
	});
	describe('#removeAll(0)', function(){
		it('should return [3,3,1,3,3,2,3,3]', function(){
			list = new List();
			list.append(3,3,1,3,3,2,3,3);
			list.removeAll(0);
			assert.equal(true, list.toArray().equals([3,3,1,3,3,2,3,3]));
		})
	});
	describe('#reverse()', function(){
		it('should return [1]', function(){
			list = new List();
			list.append(1);
			list.reverse();
			assert.equal(true, list.toArray().equals([1]));
		})
	});
	describe('#reverse()', function(){
		it('should return [2,1]', function(){
			list = new List();
			list.append(1,2);
			list.reverse();
			assert.equal(true, list.toArray().equals([2,1]));
		})
	});
	describe('#reverse()', function(){
		it('should return [3,2,1]', function(){
			list = new List();
			list.append(1,2,3);
			list.reverse();
			assert.equal(true, list.toArray().equals([3,2,1]));
		})
	});
	describe('#reverse()', function(){
		it('should return [5,4,3,2,1]', function(){
			list = new List();
			list.append(1,2,3,4,5);
			list.reverse();
			assert.equal(true, list.toArray().equals([5,4,3,2,1]));
		})
	});
	describe('#reverse()', function(){
		it('should return []', function(){
			list = new List();
			list.reverse();
			assert.equal(true, list.toArray().equals([]));
		})
	});
	describe('#recurseReverse()', function(){
		it('should return [1]', function(){
			list = new List();
			list.append(1);
			list.recurseReverse();
			assert.equal(true, list.toArray().equals([1]));
		})
	});
	describe('#recurseReverse()', function(){
		it('should return [2,1]', function(){
			list = new List();
			list.append(1,2);
			list.recurseReverse();
			assert.equal(true, list.toArray().equals([2,1]));
		})
	});
	describe('#recurseReverse()', function(){
		it('should return [3,2,1]', function(){
			list = new List();
			list.append(1,2,3);
			list.recurseReverse();
			assert.equal(true, list.toArray().equals([3,2,1]));
		})
	});
	describe('#recurseReverse()', function(){
		it('should return [5,4,3,2,1]', function(){
			list = new List();
			list.append(1,2,3,4,5);
			list.recurseReverse();
			assert.equal(true, list.toArray().equals([5,4,3,2,1]));
		})
	});
	describe('#recurseReverse()', function(){
		it('should return []', function(){
			list = new List();
			list.recurseReverse();
			assert.equal(true, list.toArray().equals([]));
		})
	});

})
