var List = require("../List.js");
var assert = require('assert');

describe('List', () => {
    let list;

	beforeEach(() => {
		list = new List();
	});

    describe('#append(1,2,3)', () => {
        it('should append all parameters', () => {
            list.append(1, 2, 3);
            assert.equal([ 1, 2, 3 ].length, list.toArray().length);
            assert.equal(3, list.size);
        });
    });
    describe('#prepend(1,2,3)', () => {
        it('should prepend all parameters', () => {
            list.prepend(1, 2, 3);
            assert.equal([ 1, 2, 3 ].length, list.toArray().length);
            assert.equal(3, list.size);
        });
    });
    describe('#toArray()', () => {
        it('should return [1,2,3]', () => {
            list.append(1, 2, 3);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertBefore(1,0)', () => {
        it('should insert before the head.', () => {
            list.append(2, 3);
            list.insertBefore(1, 0);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertBefore(2,1)', () => {
        it('should insert before the tail.', () => {
            list.append(1, 3);
            list.insertBefore(2, 1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertBefore(3,2)', () => {
        it('should insert at the tail.', () => {
            list.append(1, 2);
            list.insertBefore(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertBefore(3,50)', () => {
        it('should insert at the tail.', () => {
            list.append(1, 2);
            list.insertBefore(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertAfter(2,0)', () => {
        it('should insert after the head.', () => {
            list.append(1, 3);
            list.insertAfter(2, 0);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertAfter(1,-1)', () => {
        it('should insert at the head.', () => {
            list.append(2, 3);
            list.insertAfter(1, -1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertAfter(3,2)', () => {
        it('should insert at the tail.', () => {
            list.append(1, 2);
            list.insertAfter(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertAfter(3,50)', () => {
        it('should insert after the tail.', () => {
            list.append(1, 2);
            list.insertAfter(3, 50);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replace(2,5)', () => {
        it('should all 2s with 5s.', () => {
            list.append(2, 1, 2, 3, 2, 5, 2);
            list.replace(2, 5);
            assert.deepEqual(list.toArray(), [ 5, 1, 5, 3, 5, 5, 5 ]);
        });
    });
    describe('#replaceAtIndex(0, 5)', () => {
        it('should replace head element with a 5.', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(0, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3 ]);
        });
    });
    describe('#replaceAtIndex(2, 5)', () => {
        it('should replace tail element with a 5.', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
    });
    describe('#replaceAtIndex(-1, 5)', () => {
        it('should fail silently', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(-1, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replaceAtIndex(3, 5)', () => {
        it('should fail silently', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replaceFirst(2, 5)', () => {
        it('should replace the first instance of 2', () => {
            list.append(1, 2, 3, 2);
            list.replaceFirst(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 5, 3, 2 ]);
        });
    });
    describe('#replaceFirst(1, 5)', () => {
        it('should replace the first instance of 1(head)', () => {
            list.append(1, 2, 3, 2);
            list.replaceFirst(1, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3, 2 ]);
        });
    });
    describe('#replaceFirst(3, 5)', () => {
        it('should replace the first instance of 3(tail)', () => {
            list.append(1, 2, 3);
            list.replaceFirst(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
    });
    describe('#replaceFirst(0, 5)', () => {
        it('should replace nothing.', () => {
            list.append(1, 2, 3);
            list.replaceFirst(0, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replaceLast(2, 5)', () => {
        it('should replace the first instance of 2', () => {
            list.append(1, 2, 3, 2);
            list.replaceLast(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3, 5 ]);
        });
    });
    describe('#replaceLast(1, 5)', () => {
        it('should replace the first instance of 1(head)', () => {
            list.append(1, 2, 3, 2);
            list.replaceLast(1, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3, 2 ]);
        });
    });
    describe('#replaceLast(3, 5)', () => {
        it('should replace the first instance of 3(tail)', () => {
            list.append(1, 2, 3);
            list.replaceLast(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
    });
    describe('#replaceLast(0, 5)', () => {
        it('should replace nothing.', () => {
            list.append(1, 2, 3);
            list.replaceLast(0, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#indexOf(1)', () => {
        it('should return 0', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(1), 0);
        });
    });
    describe('#indexOf(2)', () => {
        it('should return 1', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(2), 1);
        });
    });
    describe('#indexOf(3)', () => {
        it('should return 2', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(3), 2);
        });
    });
    describe('#indexOf(4)', () => {
        it('should return -1', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(4), -1);
        });
    });
    describe('#indexOf(1)', () => {
        it('should return 0', () => {
            list.append(1, 2, 3, 1);
            assert.equal(list.indexOf(1), 0);
        });
    });
    describe('#lastIndexOf(1)', () => {
        it('should return 0', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(1), 0);
        });
    });
    describe('#lastIndexOf(2)', () => {
        it('should return 1', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(2), 1);
        });
    });
    describe('#lastIndexOf(3)', () => {
        it('should return 2', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(3), 2);
        });
    });
    describe('#lastIndexOf(4)', () => {
        it('should return -1', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(4), -1);
        });
    });
    describe('#lastIndexOf(1)', () => {
        it('should return 3', () => {
            list.append(1, 2, 3, 1);
            assert.equal(list.lastIndexOf(1), 3);
        });
    });
    describe('#reduce(+)', () => {
        it('should return 6', () => {
            list.append(1, 2, 3);
            assert.equal(6, list.reduce((a, b) => {
                return a + b;
            }));
        });
    });
    describe('#map(+1)', () => {
        it('should return [2,3,4]', () => {
            list.append(1, 2, 3);
            list.map((a) => {
                return a + 1;
            });
            assert.deepEqual(list.toArray(), [ 2, 3, 4 ]);
        });
    });
    describe('#filter(<3)', () => {
        it('should return [1,2]', () => {
            list.append(1, 2, 3);
            var filtered = list.filter((a) => {
                return a < 3;
            });
            assert.deepEqual(filtered.toArray(), [ 1, 2 ]);
        });
    });
    describe('#removeAtIndex(0)', () => {
        it('should return [2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(0);
            assert.deepEqual(list.toArray(), [ 2, 3 ]);
        });
    });
    describe('#removeAtIndex(1)', () => {
        it('should return [1,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(1);
            assert.deepEqual(list.toArray(), [ 1, 3 ]);
        });
    });
    describe('#removeAtIndex(2)', () => {
        it('should return [1,2]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(2);
            assert.deepEqual(list.toArray(), [ 1, 2 ]);
        });
    });
    describe('#removeAtIndex(-1)', () => {
        it('should return [1,2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(-1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#removeAtIndex(3)', () => {
        it('should return [1,2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(3);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#removeAll(3)', () => {
        it('should return [1,2]', () => {
            list.append(3, 3, 1, 3, 3, 2, 3, 3);
            list.removeAll(3);
            assert.deepEqual(list.toArray(), [ 1, 2 ]);
        });
    });
    describe('#removeAll(0)', () => {
        it('should return [3,3,1,3,3,2,3,3]', () => {
            list.append(3, 3, 1, 3, 3, 2, 3, 3);
            list.removeAll(0);
            assert.deepEqual(list.toArray(), [ 3, 3, 1, 3, 3, 2, 3, 3 ]);
        });
    });
    describe('#reverse()', () => {
        it('should return [1]', () => {
            list.append(1);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 1 ]);
        });
    });
    describe('#reverse()', () => {
        it('should return [2,1]', () => {
            list.append(1, 2);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 2, 1 ]);
        });
    });
    describe('#reverse()', () => {
        it('should return [3,2,1]', () => {
            list.append(1, 2, 3);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 3, 2, 1 ]);
        });
    });
    describe('#reverse()', () => {
        it('should return [5,4,3,2,1]', () => {
            list.append(1, 2, 3, 4, 5);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 5, 4, 3, 2, 1 ]);
        });
    });
    describe('#reverse()', () => {
        it('should return []', () => {
            list.reverse();
            assert.deepEqual(list.toArray(), [ ]);
        });
    });
    describe('#recurseReverse()', () => {
        it('should return [1]', () => {
            list.append(1);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 1 ]);
        });
    });
    describe('#recurseReverse()', () => {
        it('should return [2,1]', () => {
            list.append(1, 2);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 2, 1 ]);
        });
    });
    describe('#recurseReverse()', () => {
        it('should return [3,2,1]', () => {
            list.append(1, 2, 3);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 3, 2, 1 ]);
        });
    });
    describe('#recurseReverse()', () => {
        it('should return [5,4,3,2,1]', () => {
            list.append(1, 2, 3, 4, 5);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 5, 4, 3, 2, 1 ]);
        });
    });
    describe('#recurseReverse()', () => {
        it('should return []', () => {
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ ]);
        });
    });

});
