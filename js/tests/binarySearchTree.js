import assert from 'assert';
import {
    Node,
    BinarySearchTree, BinarySearchTreeError
} from '../binarySearchTree';
import _ from 'lodash';
import chai from 'chai';

var expect = chai.expect;


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

    describe('invert', () => {
        it('should not do anything if root is null', () => {
            const tree = new BinarySearchTree(null);
            tree.invert();
            assert.equal(tree.root, null);
        });
        it('should result in [1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.invert();
            assert.deepEqual(tree.root.data, 1);
        });
        it('should result in [2,1]', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.root.right = new Node(2);
            tree.invert();
            assert.deepEqual(tree.inOrderArray(), [ 2, 1 ]);
        });
        it('should result in [3,2,1]', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            tree.invert();
            assert.deepEqual(tree.inOrderArray(), [ 3, 2, 1 ]);
        });
        it('should result in [9,7,6,5,4,3,1]', () => {
            const tree = new BinarySearchTree(new Node(5));

            tree.root.left = new Node(3);
            tree.root.right = new Node(7);

            tree.root.left.left = new Node(1);
            tree.root.left.right = new Node(4);

            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(9);

            tree.invert();
            assert.deepEqual(tree.inOrderArray(), [ 9, 7, 6, 5, 4, 3, 1 ]);
        });
    });


    describe('pathsWithSum', () => {
        it('should return 0 paths', () => {
            const tree = new BinarySearchTree(null);
            const paths = tree.pathsWithSum(0);
            assert.equal(paths.length, 0);
        });
        it('should return 1 path', () => {
            const tree = new BinarySearchTree(new Node(1));
            const paths = tree.pathsWithSum(1);
            assert.equal(paths.length, 1);
        });
        it('should return 1 path', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.root.right = new Node(2);
            const paths = tree.pathsWithSum(3);
            assert.equal(paths.length, 1);
        });
        it('should return 1 path', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const paths = tree.pathsWithSum(5);
            assert.deepEqual(paths.length, 1);
        });
        it('should return 2 paths', () => {
            const tree = new BinarySearchTree(new Node(7));

            tree.root.left = new Node(6);
            tree.root.right = new Node(9);

            tree.root.left.left = new Node(5);

            tree.root.left.left.left = new Node(3);
            tree.root.left.left.right = new Node(4);

            tree.root.left.left.left.left = new Node(1);

            const paths = tree.pathsWithSum(22);
            assert.deepEqual(paths.length, 2);
        });
    });

    describe('containsTwoNodesEqualToSum', () => {
        it('should return false', () => {
            const tree = new BinarySearchTree(null);
            const result = tree.containsTwoNodesEqualToSum(0);
            assert.equal(result, false);
        });
        it('should return false', () => {
            const tree = new BinarySearchTree(new Node(1));
            const result = tree.containsTwoNodesEqualToSum(1);
            assert.equal(result, false);
        });
        it('should return true', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const result = tree.containsTwoNodesEqualToSum(5);
            assert.equal(result, true);
        });
        it('should return true', () => {
            const tree = new BinarySearchTree(new Node(10));

            tree.root.left = new Node(7);
            tree.root.right = new Node(15);

            tree.root.left.left = new Node(5);
            tree.root.left.right = new Node(8);

            tree.root.left.left.left = new Node(1);
            tree.root.left.left.right = new Node(6);

            tree.root.right.left = new Node(14);
            tree.root.right.right = new Node(21);

            const result = tree.containsTwoNodesEqualToSum(9);
            assert.equal(result, true);
        });
        it('should return true', () => {
            const tree = new BinarySearchTree(new Node(10));

            tree.root.left = new Node(7);
            tree.root.right = new Node(15);

            tree.root.left.left = new Node(5);
            tree.root.left.right = new Node(8);

            tree.root.left.left.left = new Node(1);
            tree.root.left.left.right = new Node(6);

            tree.root.right.left = new Node(14);
            tree.root.right.right = new Node(21);

            const result = tree.containsTwoNodesEqualToSum(35);
            assert.equal(result, true);
        });
    });

    describe('levelsToLists', () => {
        it('should return [[2], [1,3]]', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);

            const result = tree.levelsToLists();
            assert.deepEqual(result, [ [ 2 ], [ 1, 3 ] ]);
        });
    });

    describe('assignRightSiblings', () => {
        it('should assign any siblings', () => {
            const tree = new BinarySearchTree(new Node(2));

            tree.assignRightSiblings();
            assert.equal(typeof tree.root.sibling, 'undefined');
        });
        it('should assign 1 sibling', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);

            tree.assignRightSiblings();
            assert.equal(tree.root.left.sibling, tree.root.right);
        });
        it('should assign 4 siblings', () => {
            const tree = new BinarySearchTree(new Node(20));
            tree.root.left = new Node(10);
            tree.root.right = new Node(30);

            tree.root.left.left = new Node(5);
            tree.root.left.right = new Node(15);

            tree.root.right.left = new Node(25);
            tree.root.right.right = new Node(35);

            tree.assignRightSiblings();
            assert.equal(tree.root.left.sibling, tree.root.right);
            assert.equal(tree.root.left.left.sibling, tree.root.left.right);
            assert.equal(tree.root.left.right.sibling, tree.root.right.left);
            assert.equal(tree.root.right.left.sibling, tree.root.right.right);
        });
    });

    describe('findSubPathsWithSum', () => {
        it('should throw error when sum is not supplied.', () => {
            const tree = new BinarySearchTree();
            expect(() => {
                tree.findSubPathsWithSum();
            }).to.throw(BinarySearchTreeError);
        });
        it('should return [] for an empty tree', () => {
            const tree = new BinarySearchTree();
            const result = tree.findSubPathsWithSum(5);
            assert.deepEqual(result, []);
        });
        it('should return [[1]] if the tree only has 1 node with data == 1', () => {
            const tree = new BinarySearchTree(new Node(1));
            const result = tree.findSubPathsWithSum(1);
            assert.deepEqual(result, [ [ 1 ] ]);
        });
        it('should return [[1,2]] if the tree has the nodes 1 -> 2 (left), and sought sum is 3', () => {
            const tree = new BinarySearchTree(new Node(1));
            tree.root.left = new Node(2);
            const result = tree.findSubPathsWithSum(3);
            assert.deepEqual(result, [ [ 1, 2 ] ]);
        });
        it('should return [[2,3]] if the tree has the nodes (right) 1 <- 2 -> 3 (left), and sought sum is 5', () => {
            const tree = new BinarySearchTree(new Node(2));
            tree.root.left = new Node(1);
            tree.root.right = new Node(3);
            const result = tree.findSubPathsWithSum(5);
            assert.deepEqual(result, [ [ 2, 3 ] ]);
        });
        it('should return [[20]] for sum 20, [[20,10],[30]] for 30, and [[20,30,35]] for 85', () => {
            const tree = new BinarySearchTree(new Node(20));
            tree.root.left = new Node(10);
            tree.root.right = new Node(30);

            tree.root.left.left = new Node(5);
            tree.root.left.right = new Node(15);

            tree.root.right.left = new Node(25);
            tree.root.right.right = new Node(35);

            const result = tree.findSubPathsWithSum(20);
            assert.deepEqual(result, [ [ 20 ] ]);

            const secondResult = tree.findSubPathsWithSum(30);
            assert.deepEqual(secondResult, [ [ 20, 10 ], [ 30 ] ]);

            const thirdResult = tree.findSubPathsWithSum(85);
            assert.deepEqual(thirdResult, [ [ 20, 30, 35 ] ]);
        });
    });

	describe('inOrderSuccessor', () => {
		it('should find 10 for 7 <- 10 -> 14', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			const result = tree.inOrderSuccessor(tree.root.left);
			assert.equal(result.data, 10);
		});
		it('should find 8', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.inOrderSuccessor(tree.root.left);
			assert.equal(result.data, 8);
		});
		it('should find 7', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.inOrderSuccessor(tree.root.left.left);
			assert.equal(result.data, 7);
		});
	});

	describe('inOrderPredecessor', () => {
		it('should find 10 for 7 <- 10 -> 14', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			const result = tree.inOrderPredecessor(tree.root.right);
			assert.equal(result.data, 10);
		});
		it('should find 4', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.inOrderPredecessor(tree.root.left);
			assert.equal(result.data, 4);
		});
		it('should find 14', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.inOrderPredecessor(tree.root.right.right);
			assert.equal(result.data, 14);
		});
	});

	describe('findCommonAncestor', () => {
		it('should find 10 for 7 <- 10 -> 14', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			const result = tree.findCommonAncestor(7, 14);
			assert.equal(result.data, 10);
		});
		it('should find 10', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.findCommonAncestor(17, 8);
			assert(result !== null);
			assert.equal(result.data, 10);
		});
		it('should find 10', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.findCommonAncestor(11, 7);
			assert.equal(result.data, 10);
		});
		it('should find 10, even if sought values are on same path', () => {
			const tree = new BinarySearchTree(new Node(10));
			tree.root.left = new Node(7);
			tree.root.right = new Node(14);

			tree.root.left.left = new Node(4);
			tree.root.left.right = new Node(8);

			tree.root.right.left = new Node(11);
			tree.root.right.right = new Node(17);

			const result = tree.findCommonAncestor(4, 7);
			assert.equal(result.data, 10);
		});
	});

	describe('sequences', () => {
		it('should return [1] for single node BST', () => {
			const tree = new BinarySearchTree(new Node(1));
			const result = tree.sequences();
			assert.deepEqual(result, [ [ 1 ] ]);
		});
		it('should return [2, 1] for double node BST', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			const result = tree.sequences();
			assert.deepEqual(result, [ [ 2, 1 ] ]);
		});
		it('should return [2, 1, 3], [2, 3, 1] for triple node BST', () => {
			const tree = new BinarySearchTree(new Node(2));
			tree.root.left = new Node(1);
			tree.root.right = new Node(3);
			const result = tree.sequences();
			assert.deepEqual(result, [ [ 2, 1, 3 ], [ 2, 3, 1 ] ]);
		});
		it(`should return
			[ 5, 3, 1, 2, 7, 6, 9 ],
			[ 5, 3, 1, 2, 7, 9, 6 ],
			[ 5, 3, 2, 1, 7, 6, 9 ],
			[ 5, 3, 2, 1, 7, 9, 6 ],
			[ 5, 7, 6, 9, 3, 1, 2 ],
			[ 5, 7, 6, 9, 3, 2, 1 ],
			[ 5, 7, 9, 6, 3, 1, 2 ],
			[ 5, 7, 9, 6, 3, 2, 1 ]`, () => {
			const tree = new BinarySearchTree(new Node(5));
			tree.root.left = new Node(3);
			tree.root.right = new Node(7);

			tree.root.left.left = new Node(1);
			tree.root.left.right = new Node(2);

			tree.root.right.left = new Node(6);
			tree.root.right.right = new Node(9);

			const result = tree.sequences();
			assert.deepEqual(result, [
				[ 5, 3, 1, 2, 7, 6, 9 ],
				[ 5, 3, 1, 2, 7, 9, 6 ],
				[ 5, 3, 2, 1, 7, 6, 9 ],
				[ 5, 3, 2, 1, 7, 9, 6 ],
				[ 5, 7, 6, 9, 3, 1, 2 ],
				[ 5, 7, 6, 9, 3, 2, 1 ],
				[ 5, 7, 9, 6, 3, 1, 2 ],
				[ 5, 7, 9, 6, 3, 2, 1 ]
			]);
		});
	});

});
