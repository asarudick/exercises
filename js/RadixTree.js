
export default class RadixTree {
	constructor () {
		this.root = {};
	}

	add (word) {

		function recurse (node, str) {

			// TODO: Throw error if input is empty?
			if (!str.length)
			{
				return;
			}

			let nodeHasMatch = false;

			for (const prefix in node)
			{
				// Substring case.
				if (prefix.substr(0, str.length) === str)
				{
					nodeHasMatch = true;

					// Split the prefix, and copy children to new node.
					// e.g. `rocker` becomes `rock` -> `er`,
					// and `rocker`'s children becomes `er`'s children,
					// and `rock`'s only child becomes `er`;
					const newNode = {};
					newNode[prefix.substr(str.length)] = node[prefix];
					node[str] = newNode;

					// Delete old larger prefix.
					delete node[prefix];
				}
				// Superstring case.
				else if (str.substr(0, prefix.length) === prefix) {
					nodeHasMatch = true;

					recurse(node[prefix], str.substr(prefix.length));
				}
			}

			// When the prefix is neither a superstring nor a substring of any node, just add it and exit.
			if (!nodeHasMatch) {
				node[str] = {};
				return;
			}
		}

		recurse(this.root, word);
	}

	// TODO: Clean.
	find (str) {

		const result = [];
		const queue = [];

		function enqueue (item, prefix) {
			queue.push({
						node: item.node[prefix],
						suffix: item.suffix.substr(prefix.length),
						prefix: item.prefix + item.suffix.substr(0, prefix.length)
						});
		}

		// Push all matches form root.
		for (const prefix in this.root) {
			// If the prefix is a superstring...
			if (prefix.substr(0, str.length) === str) {
				result.push(prefix);
				queue.push({
							node: this.root[prefix],
							suffix: str.substr(prefix.length),
							prefix: prefix
							});
			}
			// If the prefix is a substring of str...
			else if (str.substr(0, prefix.length) === prefix) {
				queue.push({
							node: this.root[prefix],
							suffix: str.substr(prefix.length),
							prefix: prefix
							});
			}
		}

		while (queue.length)
		{
			const item = queue.shift();

			for (const prefix in item.node) {

				// If the prefix is a superstring...
				if (prefix.substr(0, item.suffix.length) === item.suffix) {
					result.push(item.prefix + prefix);
					enqueue(item, prefix);
				}
				// If the prefix is a substring of str...
				else if (item.suffix.substr(0, prefix.length) === prefix) {
					enqueue(item, prefix);
				}

			}
		}

		return result;

	}
}
