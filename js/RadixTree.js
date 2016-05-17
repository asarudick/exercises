
export default class RadixTree {
	constructor () {
		this.root = {};
	}

	add (word) {

		function recurse (node, str) {

			if (!str.length)
			{
				return;
			}

			let inNode = false;

			for (const prefix in node)
			{
				if (prefix.substr(0, str.length) === str)
				{
					inNode = true;
					const newNode = {};
					newNode[prefix.substr(str.length)] = node[prefix];
					node[str] = newNode;
					delete node[prefix];
				}
				else if (str.substr(0, prefix.length) === prefix) {
					inNode = true;
					recurse(node[prefix], str.substr(prefix.length));
				}
			}

			if (!inNode) {
				node[str] = {};
				return;
			}
		}

		recurse(this.root, word);
	}

	find (str) {
		let node = this.root;
		let fragment = str;

		while (fragment.length) {
			const result = this._findPrefixNode(node, fragment);

			// Unable to find prefix, which means our word isn't there.
			if (!result)
			{
				return 0;
			}

			node = result.node;
			fragment = fragment.substr(result.prefix.length - 1);
		}

		if (!Object.keys(node).length)
		{
			return 1;
		}

		return this._getChildren(node) + 1;

	}

	_getChildren (root)
	{
		const queue = [];
		let count = 0;

		queue.push(root);

		while (queue.length)
		{
			const node = queue.unshift();

			for (const prefix in node)
			{
				queue.push(node[prefix]);
				count++;
			}
		}

		return count;
	}

	_findPrefixNode (node, needle)
	{
		for (const prefix in node)
		{
			if (needle.substr(0, prefix.length) === prefix)
			{
				return { node: node[prefix], prefix: prefix };
			}
		}
	}
}
