class Node {
    constructor(data, next) {
        this.next = next;
        this.data = data;
    }
}

export default class List {
    constructor () {
        this.size = 0;

        // Sentinels never have data themselves. They only serve to make list
        // operations easier. They'll always point to the head, if there is a head.
        this.sentinel = new Node(null, null);

        this.tail = null;
    }

    append () {

        var values = Array.prototype.slice.call(arguments);

        for (var i = 0; i < values.length; i++) {

            if (this.tail === null) {
                var node = new Node(values[i], null);
                this.sentinel.next = node;
                this.tail = this.sentinel.next;
                this.size++;
                continue;
            }

            this.tail.next = new Node(values[i], null);
            this.tail = this.tail.next;
            this.size++;
        }
    }

	at (index) {

		index = index < 0 ? this.size + index : index;

		if (index < -this.size + 1 || index > this.size - 1)
		{
			return null;
		}
		
		let node = this.sentinel.next;
		let count = 0;

		while (node !== null && count < index)
		{
			node = node.next;
			count++;
		}

		return node.data;
	}

    prepend () {

        var values = Array.prototype.slice.call(arguments);

        // Work backwards, otherwise arguments will be in reverse order in
        // the list.
        for (var i = values.length - 1; i >= 0; i--) {
            this.sentinel.next = new Node(values[i], this.sentinel.next);
            this.size++;
        }
    }

    toArray () {
        var node = this.sentinel.next;
        var result = [];
        while (node !== undefined && node !== null) {
            result.push(node.data);
            node = node.next;
        }
        return result;
    }

    insertBefore (data, i) {
        var node = this.sentinel;
        var index = -1;

        // Find the position prior to the index.
        while (node.next !== null && i - 1 !== index) {
            index++;
            node = node.next;
        }

        node.next = new Node(data, node.next);
        this.size++;
    }

    insertAfter (data, i) {
        var node = this.sentinel;
        var index = -1;

        while (node.next !== null && i !== index) {
            index++;
            node = node.next;
        }

        var newNode = new Node(data, node.next);

        node.next = newNode;

        if (node === this.tail) {
            this.tail = newNode;
        }

        this.size++;
    }

    replace (search, value) {
        this.map(function (data) {
            if (data === search) {
                return value;
            }
            return data;
        });
    }

    replaceAtIndex (i, value) {

        // At the head.
        var node = this.sentinel.next;
        var index = 0;

        // Iterate until we hit the index, or the end.
        while (node !== null) {
            // Stop at the index and change the data.
            if (i === index) {
                node.data = value;
                return;
            }

            index++;
            node = node.next;
        }
    }

    replaceFirst (search, value) {
        var node = this.sentinel.next;

        while (node !== null) {
            if (node.data === search) {
                node.data = value;
                return;
            }
            node = node.next;
        }
    }

    replaceLast (search, value) {
        var node = this.sentinel.next;
        var last = null;

        while (node !== null) {
            if (node.data === search) {
                last = node;
            }
            node = node.next;
        }

        if (last !== null) {
			last.data = value;
		}
    }

    // Analog of Array.prototype.indexOf
    indexOf (search) {
        var index = -1;

        var node = this.sentinel.next;

        while (node !== null) {
            index++;
            if (node.data === search) {
                return index;
            }
            node = node.next;
        }

        return -1;
    }

    lastIndexOf (search) {
        var index = 0;
        var lastIndex = -1;

        var node = this.sentinel.next;

        while (node !== null) {
            if (node.data === search) {
                lastIndex = index;
            }
            node = node.next;
            index++;
        }

        return lastIndex;
    }

    // Analog of the Array.prototype.reduce function.
    reduce (cb, initialValue) {
        var result = initialValue || null;
        var node = this.sentinel.next;

        while (node !== null) {
            result = cb(result, node.data);
            node = node.next;
        }

        return result;
    }

    // Executes a callback on each node's data.
    map (cb) {
        var node = this.sentinel.next;
        while (node !== null) {
            node.data = cb(node.data);
            node = node.next;
        }
    }

    // Produces a new list containing the nodes that pass the filter.
    filter (cb) {
        var result = new List();

        var node = this.sentinel.next;
        while (node !== null) {
            if (cb(node.data)) {
                result.append(node.data);
            }
            node = node.next;
        }

        return result;
    }

    // Prints out the data of each node.
    print () {
        this.map(function (data) {
            console.log(data);
        });
    }

    removeAtIndex (i) {
        if (i < 0 || i >= this.size) {
			return;
		}

        var index = -1;
        var previous = this.sentinel;
        var current = this.sentinel;

        // Iterate over the nodes.
        while (current.next !== null) {
            if (i === index + 1) {
                current.next = current.next.next;
                this.size--;
                return;
            }

            index++;

            current = current.next;

            if (current.next !== null) {
                previous = current;
            }
        }

        // Remove the last node if it matches.
        if (previous.next !== null && i === index) {
            this.tail = previous;
            previous.next = null;
            this.size--;
        }
    }

    removeAll (search) {
        var previous = this.sentinel;
        var current = this.sentinel;

        while (current.next !== null) {
            if (current.next.data === search) {
                current.next = current.next.next;
                this.size--;
                continue;
            }

            current = current.next;

            if (current.next !== null) {
				previous = current;
			}
        }

        // Remove the last node if it matches.
        if (previous.next !== null && previous.next.data === search) {
            this.tail = previous;
            previous.next = null;
            this.size--;
        }
    }

    reverse () {

        // Empty list case.
        if (this.sentinel.next === null) {
            return;
        }

        // Will need this reference later.
        var last = this.sentinel.next;

        // current visits the second node all the way to the null reference after the end
        var current = this.sentinel.next.next;

        // previous is always one behind
        var previous = this.sentinel.next;

        while (current !== null) {
            var tmp = current.next;
            current.next = previous;
            previous = current;
            current = tmp;
        }

        // Cleanup.
        this.sentinel.next = previous;

        // Eliminate the cycle.
        last.next = null;

        // Update tail.
        this.tail = last;

    }

    recurseReverse () {

        if (!this.sentinel.next) {
            return;
        }

        // Reverse, and get new tail.
        var newTail = this._recurseReverseHelper(this.sentinel.next);

        // Swap sentinel's next node and tail.
        var oldTail = this.tail;
        this.sentinel.next = oldTail;
        this.tail = newTail;
    }

    _recurseReverseHelper (node) {
        // Tail case.
        if (node.next === null) {
            return node;
        }

        var next = this._recurseReverseHelper(node.next);

        next.next = node;
        node.next = null;

        return node;
    }
}
