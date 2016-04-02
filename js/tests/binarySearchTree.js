import assert from 'assert';
import {
    Node,
    BinarySearchTree
} from '../binarySearchTree';
import _ from 'lodash';


describe('BinarySearchTree', () => {
    describe('getClosestNode', () => {
        it('should return 1 for tree with root(5), left(1), right(9), and value is 2', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(1);
            tree.root.right = new Node(9);
            const node = tree.getClosestNode(2);
            assert.equal(node.data, 1);
        });
        it('should return 1 for tree with root(5), left(1), right(9), and value is 8', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(1);
            tree.root.right = new Node(9);
            const node = tree.getClosestNode(8);
            assert.equal(node.data, 9);
        });
        it('should return 3 for tree with root(5), left child(3), and right child(7)...', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            const node = tree.getClosestNode(2);
            assert.equal(node.data, 3);
        });
    });
    describe('toDoublyLinkedList', () => {
        it('should return null', () => {
            const tree = new BinarySearchTree(null);
            const list = tree.toDoublyLinkedList();
            assert.equal(list, null);
        });
        it('should return (1)', () => {
            const tree = new BinarySearchTree(new Node(1));
            const list = tree.toDoublyLinkedList();
            assert.equal(list.data, 1);
        });
        it('should return (1) -> (2)', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            const list = tree.toDoublyLinkedList();
            assert.equal(list.data, 1);
            assert.equal(list.right.data, 2);
        });
        it('should return (1) -> (2) -> (3)', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const list = tree.toDoublyLinkedList();
            assert.equal(list.data, 1);
            assert.equal(list.right.data, 2);
            assert.equal(list.right.right.data, 3);
        });
        it('should return (1) -> (3) -> (4) -> (5) -> (6) -> (7) -> (8)', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            let node = tree.toDoublyLinkedList();

            _.forEach([ 1, 3, 4, 5, 6, 7, 8 ], (value) => {
                assert.equal(node.data, value);
                if (node.right)
                {
                    node = node.right;
                }
            });

            assert.equal(node.right, null);
        });
    });
    describe('isValidSort', () => {
        it('should find an empty tree as valid', () => {
            const tree = new BinarySearchTree(null);
            assert.equal(tree.isValidSort(), true);
        });
        it('should find an tree with only a root as valid', () => {
            const tree = new BinarySearchTree(new Node(1));
            assert.equal(tree.isValidSort(), true);
        });
        it('should find an tree with only a root(2), and left child(1) as valid', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            assert.equal(tree.isValidSort(), true);
        });
        it('should find an tree with only a root(2), left child(1), and right child(3) as valid', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            assert.equal(tree.isValidSort(), true);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as valid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValidSort(), true);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as invalid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(5);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValidSort(), false);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as invalid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(2);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValidSort(), false);
        });
    });
    describe('isValid', () => {
        it('should find an empty tree as valid', () => {
            const tree = new BinarySearchTree(null);
            assert.equal(tree.isValid(), true);
        });
        it('should find an tree with only a root as valid', () => {
            const tree = new BinarySearchTree(new Node(1));
            assert.equal(tree.isValid(), true);
        });
        it('should find an tree with only a root(2), and left child(1) as valid', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            assert.equal(tree.isValid(), true);
        });
        it('should find an tree with only a root(2), left child(1), and right child(3) as valid', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            assert.equal(tree.isValid(), true);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as valid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValid(), true);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as invalid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(5);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValid(), false);
        });
        it('should find an tree with a root(5), left child(3), and right child(7) as invalid', () => {
            const tree = new BinarySearchTree(new Node(5));
            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(2);
            tree.root.right.right = new Node(8);
            assert.equal(tree.isValid(), false);
        });
    });

	describe('inOrder', () => {
		it('should not do anything if root is null', () => {
			const tree = new BinarySearchTree(null);
			let test = false;
			tree.inOrder(() => { test = true; });
			assert.equal(test, false);
		});
		it('should result in [1]', () => {
			const tree = new BinarySearchTree(new Node(1));
			const result = [];
			tree.inOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1 ]);
		});
		it('should result in [1,2]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			const result = [];
			tree.inOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 2 ]);
		});
		it('should result in [1,2,3]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			tree.root.right = new Node(3);
			const result = [];
			tree.inOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 2, 3 ]);
		});
		it('should result in [1,3,4,5,6,7,9]', () => {
			const tree = new BinarySearchTree(new Node(5));

			tree.root.left = new Node(3);
			tree.root.right = new Node(7);

			tree.root.left.left = new Node(1);
			tree.root.left.right = new Node(4);

			tree.root.right.left = new Node(6);
			tree.root.right.right = new Node(9);

			const result = [];
			tree.inOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 3, 4, 5, 6, 7, 9 ]);
		});
	});

	describe('inOrderRecursive', () => {
		it('should not do anything if root is null', () => {
			const tree = new BinarySearchTree(null);
			let test = false;
			tree.inOrderRecursive(() => { test = true; });
			assert.equal(test, false);
		});
		it('should result in [1]', () => {
			const tree = new BinarySearchTree(new Node(1));
			const result = [];
			tree.inOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1 ]);
		});
		it('should result in [1,2]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			const result = [];
			tree.inOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 2 ]);
		});
		it('should result in [1,2,3]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			tree.root.right = new Node(3);
			const result = [];
			tree.inOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 2, 3 ]);
		});
		it('should result in [1,3,4,5,6,7,9]', () => {
			const tree = new BinarySearchTree(new Node(5));

			tree.root.left = new Node(3);
			tree.root.right = new Node(7);

			tree.root.left.left = new Node(1);
			tree.root.left.right = new Node(4);

			tree.root.right.left = new Node(6);
			tree.root.right.right = new Node(9);

			const result = [];
			tree.inOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1, 3, 4, 5, 6, 7, 9 ]);
		});
	});

	describe('preOrder', () => {
		it('should not do anything if root is null', () => {
			const tree = new BinarySearchTree(null);
			let test = false;
			tree.preOrder(() => { test = true; });
			assert.equal(test, false);
		});
		it('should result in [1]', () => {
			const tree = new BinarySearchTree(new Node(1));
			const result = [];
			tree.preOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1 ]);
		});
		it('should result in [2,1]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			const result = [];
			tree.preOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 2, 1 ]);
		});
		it('should result in [2,1,3]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			tree.root.right = new Node(3);
			const result = [];
			tree.preOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 2, 1, 3 ]);
		});
		it('should result in [5,3,1,4,7,6,9]', () => {
			const tree = new BinarySearchTree(new Node(5));

			tree.root.left = new Node(3);
			tree.root.right = new Node(7);

			tree.root.left.left = new Node(1);
			tree.root.left.right = new Node(4);

			tree.root.right.left = new Node(6);
			tree.root.right.right = new Node(9);

			const result = [];
			tree.preOrder((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 5, 3, 1, 4, 7, 6, 9 ]);
		});
	});


	describe('preOrderRecursive', () => {
		it('should not do anything if root is null', () => {
			const tree = new BinarySearchTree(null);
			let test = false;
			tree.preOrderRecursive(() => { test = true; });
			assert.equal(test, false);
		});
		it('should result in [1]', () => {
			const tree = new BinarySearchTree(new Node(1));
			const result = [];
			tree.preOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 1 ]);
		});
		it('should result in [2,1]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			const result = [];
			tree.preOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 2, 1 ]);
		});
		it('should result in [2,1,3]', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			tree.root.right = new Node(3);
			const result = [];
			tree.preOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 2, 1, 3 ]);
		});
		it('should result in [5,3,1,4,7,6,9]', () => {
			const tree = new BinarySearchTree(new Node(5));

			tree.root.left = new Node(3);
			tree.root.right = new Node(7);

			tree.root.left.left = new Node(1);
			tree.root.left.right = new Node(4);

			tree.root.right.left = new Node(6);
			tree.root.right.right = new Node(9);

			const result = [];
			tree.preOrderRecursive((node) => { result.push(node.data); } );
			assert.deepEqual(result, [ 5, 3, 1, 4, 7, 6, 9 ]);
		});
	});

    describe('postOrder', () => {
        it('should not do anything if root is null', () => {
            const tree = new BinarySearchTree(null);
            let test = false;
            tree.postOrder(() => { test = true; });
            assert.equal(test, false);
        });
        it('should result in [1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            const result = [];
            tree.postOrder((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1 ]);
        });
        it('should result in [2,1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.root.right = new Node(2);
            const result = [];
            tree.postOrder((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 2, 1 ]);
        });
        it('should result in [1,3,2]', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const result = [];
            tree.postOrder((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1, 3, 2 ]);
        });
        it('should result in [1,4,3,6,9,7,5]', () => {
            const tree = new BinarySearchTree(new Node(5));

            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(9);

            const result = [];
            tree.postOrder((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1, 4, 3, 6, 9, 7, 5 ]);
        });
    });

    describe('postOrderRecursive', () => {
        it('should not do anything if root is null', () => {
            const tree = new BinarySearchTree(null);
            let test = false;
            tree.postOrderRecursive(() => { test = true; });
            assert.equal(test, false);
        });
        it('should result in [1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            const result = [];
            tree.postOrderRecursive((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1 ]);
        });
        it('should result in [2,1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.root.right = new Node(2);
            const result = [];
            tree.postOrderRecursive((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 2, 1 ]);
        });
        it('should result in [1,3,2]', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const result = [];
            tree.postOrderRecursive((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1, 3, 2 ]);
        });
        it('should result in [1,4,3,6,9,7,5]', () => {
            const tree = new BinarySearchTree(new Node(5));

            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(9);

            const result = [];
            tree.postOrderRecursive((node) => { result.push(node.data); } );
            assert.deepEqual(result, [ 1, 4, 3, 6, 9, 7, 5 ]);
        });
    });

});
