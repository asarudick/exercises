import _ from 'lodash';

export class Node {
    constructor (data, left, right) {
        this.right = right;
        this.left = left;
        this.data = data;
    }
}

export class BinarySearchTreeError {
    constructor (message) {
        this.name = 'BinarySearchTreeError';
        this.message = message;
        this.stack = (new Error()).stack;
    }
}

export class BinarySearchTree {

    /**
     * Creates new instance of BinarySearchTree.
     * @param  {Node} root   The root of the new BinarySearchTree.
     */
    constructor (root)
    {
        this.root = root;
    }

    /**
     * Rules for Binary Search Tree validity:
     * 1. The left subtree of a node contains only nodes with keys less than the node’s key.
     * 2. The right subtree of a node contains only nodes with keys greater than the node’s key.
     * 3. Both the left and right subtrees must also be binary search trees.
     * 4. If a node has neither a left nor right subtree(ie. a leaf node), it is a valid BST by itself.
     */

    /**
     * Determines whether a node has a valid binary search tree below it.
     * Note: Runs in O(N) time, and has O(k) space complexity, where k = height of the call stack due to the recursive calls, which is the height of the tree.
     * @param  {Node}       root    The root node of the tree.
     * @return {Boolean}            Indicator of whether the root is part of, and parent of a valid binary search tree.
     */
    isValid()
    {
        /**
         * Just a local helper function to handle the actual recursion.
         * @param  {Node}       node    The node to check.
         * @param  {Number}     min     The minimum the node's value could be without violating rule #2.
         * @param  {Number}     max     The maximum the node's value could be without violating rule #1.
         * @return {Boolean}            Boolean indicator as to whether the node is a part of, and parent of a valid binary search tree.
         */
        function recurse (node, min, max) {
            if (!node)
            {
                return true;
            }

            return node.data > min &&
                node.data < max &&
                recurse(node.left, min, node.data) &&
                recurse(node.right, node.data, max);
        }

        return recurse (this.root, -Infinity, Infinity);
    }


    /**
     * Determines whether the tree is a valid binary search tree by checking the in-order sort of it.
     * Note: Has O(N) time complexity(when checking the in-order array), and O(N) space complexity, in addition to the space/time complexity of the
     * inOrderArray call.
     * @param  {Node}  root The root node of the tree to check.
     * @return {Boolean}      Boolean indicating whether the tree is a valid BST or not.
     */
    isValidSort ()
    {
        const root = this.root;

        if (root === undefined)
        {
            // TODO: Write class specific error type.
            throw new Error('First parameter cannot be undefined.');
        }

        // If there's only a leaf node, or no nodes at all, it meets the 2 requirements of being a valid BST.
        if (root === null || !(root.left || root.right))
        {
            return true;
        }

        // Retrieve the in-order array.
        const arr = this.inOrderArray();

        // Perform uniqueness and order check.
        for (let i = 1, length = arr.length; i < length; i++) {
            if (arr[i - 1] >= arr[i])
            {
                return false;
            }
        }

        return true;
    }

    /**
     * Traverses a binary tree in-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    inOrder (cb)
    {
        let node = this.root;
        const stack = [];

        while (node || stack.length)
        {
            if (node)
            {
                stack.push(node);
                node = node.left;
            }
            else
            {
                node = stack.pop();
                cb(node);
                node = node.right;
            }
        }
    }

    /**
     * Recursive and trivial version of in-order traversal of the tree.
     * @param  {Function} cb Callback to invoke upon each node traversed.
     */
    inOrderRecursive (cb)
    {
        function recurse (node)
        {
            if (!node)
            {
                return;
            }

            recurse(node.left, cb);

            cb(node);

            recurse(node.right, cb);
        }

        recurse(this.root);
    }

    /**
     * Traverses a binary tree in pre-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    preOrder (cb)
    {
        let node = this.root;
        const stack = [];

        while (node || stack.length)
        {
            if (node)
            {
                cb(node);
                stack.push(node);
                node = node.left;
            }
            else
            {
                node = stack.pop();
                node = node.right;
            }
        }
    }

    /**
     * Recursive version of pre-order traversal.
     * @param  {Function} cb Callback invoked upon each node in the traversal process.
     */
    preOrderRecursive (cb)
    {
        function recurse (node)
        {
            if (!node)
            {
                return;
            }

            cb(node);

            recurse(node.left, cb);

            recurse(node.right, cb);
        }

        recurse(this.root);
    }

    /**
     * Traverses a binary tree in post-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    postOrder (cb)
    {
        let node = this.root;

        if (!node)
        {
            return;
        }

        const stack = [];

        do
        {
            // Traverse down the left path, and build the stack with right node and root node of every node traversed.
            while (node)
            {
                if (node.right)
                {
                    stack.push(node.right);
                }

                stack.push(node);

                node = node.left;
            }

            node = stack.pop();

            // If the current node has a right node and it is on the top of stack, swap it with the top of the stack.
            if (node.right && node.right === stack[stack.length - 1])
            {
                stack.pop();
                stack.push(node);
                node = node.right;
            }
            // If no right node, or if the right node is already traversed, invoke callback for current node.
            else
            {
                cb(node);
                node = null;
            }

        }
        while (stack.length);
    }

    /**
     * Recursive and trivial version of post order traversal.
     * @param  {Function} cb Callback to invoke upon each node traversed.
     */
    postOrderRecursive (cb)
    {
        /**
         * Helper function that handles the actual post-order recursion.
         * @param  {Node} node The node to invoke the callback upon.
         */
        function recurse (node)
        {
            if (!node)
            {
                return;
            }

            recurse(node.left, cb);

            recurse(node.right, cb);

            cb(node);
        }

        recurse(this.root);
    }

    /**
     * Returns an array of the in-order traversal.
     * @param  {Node} root The root of the tree to traverse.
     * @return {array}     The nodes in order of their visit, in in-order form.
     */
    inOrderArray ()
    {
        const arr = [];
        this.inOrder((node) => arr.push(node.data));
        return arr;
    }

    /**
     * Returns the node with the value closest to the provided value.
     * @param  {Number} value
     * @return {Node}   The node with value closest to the provided value.
     */
    getClosestNode (value)
    {
        let closest = null;
        let minDeltaSoFar = Infinity;
        let node = this.root;

        while (node)
        {
            const delta = Math.abs(node.data - value);
            if (delta < minDeltaSoFar)
            {
                minDeltaSoFar = delta;
                closest = node;
            }

            if (delta === 0)
            {
                break;
            }

            if (node.data > value)
            {
                node = node.left;
                continue;
            }

            if (node.data < value)
            {
                node = node.right;
                continue;
            }
        }

        return closest;
    }

    /**
     * Inverts the binary search tree, where the left child becomes the right child for each node.
     */
    invert ()
    {
        function recurse (node)
        {
            if (!node)
            {
                return;
            }
            // Perform swap.
            const tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            recurse(node.left);
            recurse(node.right);
        }

        recurse(this.root);
    }


    /**
     * Determines whether there are two nodes that sum up to given value.
     * @param  {Number} value The value which is potentially the sum of two nodes within the tree.
     * @return {Boolean}      true if there are two nodes that sum up to given value, otherwise false.
     */
    containsTwoNodesEqualToSum (value)
    {
        if (!this.root)
        {
            return false;
        }

        if (!this.root.left && !this.root.right)
        {
            return false;
        }

        // There are cases where the root exceeds the value supplied, so let's move left and discard
        // parts of the tree that exceed it.
        let node = this.root;

        // Zero is a valid value for a node, otherwise this comparison should be >=
        while (node.data > value)
        {
            node = node.left;
        }

        const rightNodes = [];
        const leftNodes = [];

        function buildRightNodes (root) {
            let node = root;

            while (node && node.data <= value) {
                rightNodes.push(node);
                node = node.right;
            }
        }

        function buildLeftNodes (root) {
            let node = root;

            while (node) {
                if ( node.data <= value )
                {
                    leftNodes.push(node);
                }
                node = node.left;
            }
        }

        function getPreviousRight () {
            let node = null;

            if (rightNodes.length)
            {
                node = rightNodes.pop();

                let right = node.right;

                while (right)
                {
                    rightNodes.push(right);
                    right = right.right;
                }
            }

            return node;
        }

        function getNextLeft () {
            let node = null;

            if (leftNodes.length)
            {
                node = leftNodes.pop();

                let left = node.left;

                while (left)
                {
                    leftNodes.push(left);
                    left = left.left;
                }
            }

            return node;
        }

        buildRightNodes(node);
        buildLeftNodes(node);

        let right = getPreviousRight();
        let left = getNextLeft();

        while (right && left && right !== left)
        {
            const sum = left.data + right.data;

            if (sum === value)
            {
                return true;
            }

            if (sum < value)
            {
                left = getNextLeft();
            }
            else
            {
                right = getPreviousRight();
            }
        }

        return false;

    }

    /**
     * Finds the paths(from root to leaf), that sum up to given value.
     * @param  {Number} value The sum to check against.
     * @return {Array}        An array of subarrays, where each subarray
     * contains a path consisting of nodes starting with the root node and ending with a leaf node.
     */
    pathsWithSum (value)
    {
        const paths = [];

        function recurse (node, previousSum, previousPath)
        {

            if (!node)
            {
                return;
            }

            const path = Array.prototype.slice.call(previousPath).concat([ node ]);
            const sum = node.data + previousSum;

            if (!(node.left || node.right) && sum === value)
            {
                paths.push(path);
            }

            if (node.left)
            {
                recurse(node.left, sum, path);
            }

            if (node.right)
            {
                recurse(node.right, sum, path);
            }
        }

        recurse (this.root, 0, [ this.root ]);

        return paths;
    }

    /**
     * Converts each level of the tree to a list, and returns a list of lists.
     * @return {Array[Array]} An array of arrays, each containing a level of the tree.
     */
    levelsToLists () {

        if (!this.root)
        {
            return [];
        }

        const queue = [];
        const lists = [];
        let rightMost = this.root;

        queue.push(this.root);
        lists.push([ this.root.data ]);

        while (queue.length)
        {
            const node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (rightMost === node && queue.length)
            {
                rightMost = node.right;
                lists.push(Array.prototype.slice.call(queue).map((a) => a.data));
            }
        }

        return lists;
    }

    /**
     * Accepts a tree's root node, and converts the tree to a doubly linked list in-place.
     * @param  {Node} root The root node of the tree to convert.
     * @return {Node}      The head node of the doubly linked list.
     */
    toDoublyLinkedList ()
    {

        /**
         * Performs the actual conversion of the binary search tree to a doubly-linked list.
         * @param  {Node} node The root of the tree/subtree that is to be converted.
         * @param  {Node} rightMost The rightmost node encountered in the recursion thus far.
         */
        function convert (node, rightMost)
        {
            // No conversion needed.
            if (!node)
            {
                return;
            }

            // Will be null on the initial call.
            let rightMostNode = rightMost;

            // Go left, and return the rightmost node in subtree.
            if (node.left)
            {
                rightMostNode = convert(node.left, rightMostNode);
            }

            // Connect the current node and rightMostNode node.
            node.left = rightMostNode;

            if (rightMostNode)
            {
                rightMostNode.right = node;
            }

            // Move rightMostNode reference one over to the right(the new rightmost).
            rightMostNode = node;

            // Recursively call convert, with rightMostNode being the current node.
            if (node.right)
            {
                rightMostNode = convert(node.right, rightMostNode);
            }

            return rightMostNode;
        }

        // Do the conversion. The node returned should be the rightmost/last in the list.
        let headNode = convert(this.root);

        // Iterate all the way to the beginning.
        while (headNode && headNode.left)
        {
            headNode = headNode.left;
        }

        return headNode;
    }

    /**
     * Assigns the rightSibling property for each node within the tree(except) for the last node on each level, where a right sibling
     * does not exist.
     */
    assignRightSiblings () {

        if (!this.root)
        {
            return;
        }

        let rightMostNode = this.root;
        const queue = [];
        queue.push(this.root);
        let prev;

        while (queue.length) {

            const node = queue.shift();

            if (node.left)
            {
                queue.push(node.left);
            }

            if (node.right)
            {
                queue.push(node.right);
            }

            if (prev)
            {
                prev.sibling = node;
            }

            prev = node;


            if (node === rightMostNode)
            {
                rightMostNode = node.right;
                prev = null;
            }

        }

    }

    /**
     * Finds a path(node A down to node B) within the tree.
     * @param  {Number} The sum to test against.
     * @return {array}  The list of nodes that sum to the supplied value.
     */
    findSubPathsWithSum (sum) {

        if (!sum)
        {
            throw new BinarySearchTreeError('Sum to check for wasn\'t supplied');
        }

        if (!this.root)
        {
            return [];
        }

        const paths = [];

        function recurse (node, sumSoFar, currentPath) {

            let newSum = node.data + sumSoFar;

            currentPath.push(node.data);

            // If the new sum is greater than the expected sum, drop off the first in the array.
            while (newSum > sum)
            {
                const popped = currentPath.shift();
                newSum -= popped;
            }

            if (newSum === sum)
            {
                paths.push(currentPath);
            }

            if (node.left)
            {
                recurse(node.left, newSum, Array.prototype.slice.call(currentPath));
            }

            if (node.right) {
                recurse(node.right, newSum, Array.prototype.slice.call(currentPath));
            }
        }

        recurse(this.root, 0, []);
        return paths;
    }

	inOrderPredecessor (node) {
		if (!node)
		{
			return null;
		}

		if (node.left)
		{
			return this.maximumValue(node.left);
		}

		let current = this.root;
		let predecessor = this.root;

		while (current) {

			if (current.data < node.data) {
				predecessor = current;
				current = current.right;
			}
			else if (current.data > node.data) {
				current = current.left;
			}
			else {
				break;
			}

		}

		return predecessor;
	}

    inOrderSuccessor (node) {

		if (!node)
		{
			return null;
		}

		// If there is a right child, we know its the minimum value of that subtree.
		if (node.right)
		{
			return this.minimumValue(node.right);
		}

        let current = this.root;
        let successor = this.root;

        while (current) {

			if (current.data > node.data) {
				successor = current;
				current = current.left;
			}
			else if (current.data < node.data) {
				current = current.right;
			}
			else {
				break;
			}

        }

		return successor;
    }

	maximumValue (node) {
		let current = node;

		while (current.right) {
			current = current.right;
		}

		return current;
	}

	minimumValue (node) {
		let current = node;

		while (current.left) {
			current = current.left;
		}

		return current;
	}

	findCommonAncestor (a, b) {
		class Result {
			constructor (commonAncestor, hasFirst, hasSecond) {
				this.commonAncestor = commonAncestor;
				this.hasFirst = hasFirst;
				this.hasSecond = hasSecond;
			}
		}

		function recurse (node) {
			if (!node)
			{
				return new Result(null, false, false);
			}

			const left = recurse(node.left);
			const right = recurse(node.right);

			if (left.commonAncestor)
			{
				return left;
			}

			if (right.commonAncestor)
			{
				return right;
			}

			const hasFirst = left.hasFirst || right.hasFirst;
			const hasSecond = left.hasSecond || right.hasSecond;

			if (hasFirst && hasSecond) {
				return new Result(node, hasFirst, hasSecond);
			}

			if (node.data === a)
			{
				return new Result(null, true, hasSecond);
			}

			if (node.data === b)
			{
				return new Result(null, hasFirst, true);
			}

			return new Result(null, hasFirst, hasSecond);
		}

		return recurse(this.root).commonAncestor;
	}

	sequences () {
		function recurse (node) {

			if (!node)
			{
				return [];
			}

			const left = recurse(node.left);
			const right = recurse(node.right);

			if (!left.length && !right.length)
			{
				return [ [ node.data ] ];
			}

			let combinations = [];

			if (!left.length) {
				combinations = right;
			}

			if (!right.length) {
				combinations = left;
			}
			
			for (const leftSequence of left) {
				for (const rightSequence of right) {
					combinations.push(leftSequence.concat(rightSequence));
				}
			}

			for (const rightSequence of right) {
				for (const leftSequence of left) {
					combinations.push(rightSequence.concat(leftSequence));
				}
			}

			return _.map(combinations, (combination) => [ node.data ].concat(combination));
		}

		return recurse(this.root);
	}
}
