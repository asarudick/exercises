import List from '../List';
import assert from 'assert';

describe('List', () => {
    let list;

	beforeEach(() => {
		list = new List();
	});

    describe('#append', () => {
        it('append(1, 2, 3) should append all parameters', () => {
            list.append(1, 2, 3);
            assert.equal([ 1, 2, 3 ].length, list.toArray().length);
            assert.equal(3, list.size);
        });
    });
    describe('#prepend', () => {
        it('prepend(1, 2, 3) should prepend all parameters', () => {
            list.prepend(1, 2, 3);
            assert.equal([ 1, 2, 3 ].length, list.toArray().length);
            assert.equal(3, list.size);
        });
    });
    describe('#toArray', () => {
        it('should return [1,2,3]', () => {
            list.append(1, 2, 3);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertBefore', () => {
        it('insertBefore(1, 0) should insert before the head.', () => {
            list.append(2, 3);
            list.insertBefore(1, 0);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertBefore(2, 1) should insert before the tail.', () => {
            list.append(1, 3);
            list.insertBefore(2, 1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertBefore(3, 2) should insert at the tail.', () => {
            list.append(1, 2);
            list.insertBefore(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertBefore(3, 50) should insert at the tail.', () => {
            list.append(1, 2);
            list.insertBefore(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#insertAfter', () => {
        it('insertAfter(2, 0) should insert after the head.', () => {
            list.append(1, 3);
            list.insertAfter(2, 0);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertAfter(1, -1) should insert at the head.', () => {
            list.append(2, 3);
            list.insertAfter(1, -1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertAfter(3, 2) should insert at the tail.', () => {
            list.append(1, 2);
            list.insertAfter(3, 2);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('insertAfter(3, 50) should insert after the tail.', () => {
            list.append(1, 2);
            list.insertAfter(3, 50);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replace', () => {
        it('replace(2, 5) should all 2s with 5s.', () => {
            list.append(2, 1, 2, 3, 2, 5, 2);
            list.replace(2, 5);
            assert.deepEqual(list.toArray(), [ 5, 1, 5, 3, 5, 5, 5 ]);
        });
    });
    describe('#replaceAtIndex', () => {
        it('replaceAtIndex(0, 5) should replace head element with a 5.', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(0, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3 ]);
        });
        it('replaceAtIndex(2, 5) should replace tail element with a 5.', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
        it('replaceAtIndex(-1, 5) should fail silently', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(-1, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('replaceAtIndex(3, 5) should fail silently', () => {
            list.append(1, 2, 3);
            list.replaceAtIndex(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
	describe('#replaceFirst', () => {
        it('replaceFirst(2, 5) should replace the first instance of 2', () => {
            list.append(1, 2, 3, 2);
            list.replaceFirst(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 5, 3, 2 ]);
        });
        it('replaceFirst(1, 5) should replace the first instance of 1(head)', () => {
            list.append(1, 2, 3, 2);
            list.replaceFirst(1, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3, 2 ]);
        });
        it('replaceFirst(3, 5) should replace the first instance of 3(tail)', () => {
            list.append(1, 2, 3);
            list.replaceFirst(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
        it('replaceFirst(0, 5) should replace nothing.', () => {
            list.append(1, 2, 3);
            list.replaceFirst(0, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#replaceLast', () => {
        it('replaceLast(2, 5) should replace the first instance of 2', () => {
            list.append(1, 2, 3, 2);
            list.replaceLast(2, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3, 5 ]);
        });
        it('replaceLast(1, 5) should replace the first instance of 1(head)', () => {
            list.append(1, 2, 3, 2);
            list.replaceLast(1, 5);
            assert.deepEqual(list.toArray(), [ 5, 2, 3, 2 ]);
        });
        it('replaceLast(3, 5) should replace the first instance of 3(tail)', () => {
            list.append(1, 2, 3);
            list.replaceLast(3, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 5 ]);
        });
        it('replaceLast(0, 5) should replace nothing.', () => {
            list.append(1, 2, 3);
            list.replaceLast(0, 5);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#indexOf', () => {
        it('indexOf(1) should return 0', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(1), 0);
        });
        it('indexOf(2) should return 1', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(2), 1);
        });
        it('indexOf(3) should return 2', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(3), 2);
        });
        it('indexOf(4) should return -1', () => {
            list.append(1, 2, 3);
            assert.equal(list.indexOf(4), -1);
        });
        it('indexOf(1) should return 0', () => {
            list.append(1, 2, 3, 1);
            assert.equal(list.indexOf(1), 0);
        });
    });
    describe('#lastIndexOf', () => {
        it('lastIndexOf(1) should return 0', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(1), 0);
        });
        it('lastIndexOf(2) should return 1', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(2), 1);
        });
        it('lastIndexOf(3) should return 2', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(3), 2);
        });
        it('lastIndexOf(4) should return -1', () => {
            list.append(1, 2, 3);
            assert.equal(list.lastIndexOf(4), -1);
        });
        it('lastIndexOf(1) should return 3', () => {
            list.append(1, 2, 3, 1);
            assert.equal(list.lastIndexOf(1), 3);
        });
    });
    describe('#reduce', () => {
        it('reduce(+) should return 6', () => {
            list.append(1, 2, 3);
            assert.equal(6, list.reduce((a, b) => {
                return a + b;
            }));
        });
    });
    describe('#map', () => {
        it('map(+1) should return [2,3,4]', () => {
            list.append(1, 2, 3);
            list.map((a) => {
                return a + 1;
            });
            assert.deepEqual(list.toArray(), [ 2, 3, 4 ]);
        });
    });
    describe('#filter', () => {
        it('filter(<3) should return [1,2]', () => {
            list.append(1, 2, 3);
            var filtered = list.filter((a) => {
                return a < 3;
            });
            assert.deepEqual(filtered.toArray(), [ 1, 2 ]);
        });
    });
    describe('#removeAtIndex', () => {
        it('removeAtIndex(0) should return [2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(0);
            assert.deepEqual(list.toArray(), [ 2, 3 ]);
        });
        it('removeAtIndex(1) should return [1,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(1);
            assert.deepEqual(list.toArray(), [ 1, 3 ]);
        });
        it('removeAtIndex(2) should return [1,2]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(2);
            assert.deepEqual(list.toArray(), [ 1, 2 ]);
        });
        it('removeAtIndex(-1) should return [1,2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(-1);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
        it('removeAtIndex(3) should return [1,2,3]', () => {
            list.append(1, 2, 3);
            list.removeAtIndex(3);
            assert.deepEqual(list.toArray(), [ 1, 2, 3 ]);
        });
    });
    describe('#removeAll', () => {
        it('removeAll(3) should return [1,2]', () => {
            list.append(3, 3, 1, 3, 3, 2, 3, 3);
            list.removeAll(3);
            assert.deepEqual(list.toArray(), [ 1, 2 ]);
        });
        it('removeAll(0) should return [3,3,1,3,3,2,3,3]', () => {
            list.append(3, 3, 1, 3, 3, 2, 3, 3);
            list.removeAll(0);
            assert.deepEqual(list.toArray(), [ 3, 3, 1, 3, 3, 2, 3, 3 ]);
        });
    });
    describe('#reverse', () => {
        it('should return [1]', () => {
            list.append(1);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 1 ]);
        });
        it('should return [2,1]', () => {
            list.append(1, 2);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 2, 1 ]);
        });
        it('should return [3,2,1]', () => {
            list.append(1, 2, 3);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 3, 2, 1 ]);
        });
        it('should return [5,4,3,2,1]', () => {
            list.append(1, 2, 3, 4, 5);
            list.reverse();
            assert.deepEqual(list.toArray(), [ 5, 4, 3, 2, 1 ]);
        });
        it('should return []', () => {
            list.reverse();
            assert.deepEqual(list.toArray(), [ ]);
        });
    });
    describe('#recurseReverse', () => {
        it('should return [1]', () => {
            list.append(1);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 1 ]);
        });
        it('should return [2,1]', () => {
            list.append(1, 2);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 2, 1 ]);
        });
        it('should return [3,2,1]', () => {
            list.append(1, 2, 3);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 3, 2, 1 ]);
        });
        it('should return [5,4,3,2,1]', () => {
            list.append(1, 2, 3, 4, 5);
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ 5, 4, 3, 2, 1 ]);
        });
        it('should return []', () => {
            list.recurseReverse();
            assert.deepEqual(list.toArray(), [ ]);
        });
    });

});
