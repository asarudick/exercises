export class Node {
    constructor (data, left, right) {
        this.right = right;
        this.left = left;
        this.data = data;
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
    static isValid(root)
    {
        /**
         * Just a local helper function to handle the actual recursion.
         * @param  {Node}       node    The node to check.
         * @param  {Number}     min     The minimum the node's value could be without violating rule #2.
         * @param  {Number}     max     The maximum the node's value could be without violating rule #1.
         * @return {Boolean}            Boolean indicator as to whether the node is a part of, and parent of a valid binary search tree.
         */
        function isValidRecurser (node, min, max) {
            if (!node)
            {
                return true;
            }

            return node.data > min &&
                node.data < max &&
                isValidRecurser(node.left, min, node.data) &&
                isValidRecurser(node.right, node.data, max);
        }

        return isValidRecurser (root, -Infinity, Infinity);
    }

    /**
     * Traverses a binary tree in-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    static inOrder (root, cb)
    {
        let node = root;
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
     * Traverses a binary tree in pre-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    static preOrder (root, cb)
    {
        let node = root;
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
     * Traverses a binary tree in post-order, and invokes a callback on each each node during traversal.
     * @param  {Node}   root   The root node of the tree to traverse.
     * @param  {Function} cb   The callback to invoke on each node.
     */
    static postOrder (root, cb)
    {
        if (!root)
        {
            return;
        }

        let node = root;
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
     * Returns an array of the in-order traversal.
     * @param  {Node} root The root of the tree to traverse.
     * @return {array}     The nodes in order of their visit, in in-order form.
     */
    static inOrderArray (root)
    {
        const arr = [];
        BinarySearchTree.inOrder(root, (node) => arr.push(node.data));
        return arr;
    }

    /**
     * Determines whether the tree is a valid binary search tree by checking the in-order sort of it.
     * Note: Has O(N) time complexity(when checking the in-order array), and O(N) space complexity, in addition to the space/time complexity of the
     * inOrderArray call.
     * @param  {Node}  root The root node of the tree to check.
     * @return {Boolean}      Boolean indicating whether the tree is a valid BST or not.
     */
    static isValidSort (root)
    {
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
        const arr = BinarySearchTree.inOrderArray(root);

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
     * Accepts a tree's root node, and converts the tree to a doubly linked list in-place.
     * @param  {Node} root The root node of the tree to convert.
     * @return {Node}      The head node of the doubly linked list.
     */
    static toDoublyLinkedList (root)
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
        let headNode = convert(root);

        // Iterate all the way to the beginning.
        while (headNode && headNode.left)
        {
            headNode = headNode.left;
        }

        return headNode;
    }
}
