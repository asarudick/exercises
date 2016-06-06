import _ from 'lodash';

class Node {
	constructor (value) {
		this.value = value;
		this.children = {};
	}

	add (node) {
		this.children[node.value] = true;
	}

	contains (value)
	{
		for (const child in this.children) {
			if (child.value === value)
			{
				return child;
			}
		}

		return null;
	}
}

export default function validateDependencies (projects, dependencies) {
	const nodes = {};

	// Populate graph.
	for (const project of projects) {
		nodes[project] = new Node(project);
	}

	// array pair of strings.
	for (const [ dependency, project ] of dependencies)
	{
		const dependencyNode = nodes[dependency];

		if (!dependencyNode) {
			throw new Error('Dependency not found in projects.');
		}

		const projectNode = nodes[project];

		if (!projectNode) {
			throw new Error('Project not found in projects.');
		}

		if (!projectNode.contains(dependency))
		{
			projectNode.add(dependencyNode);
		}


	}

	const buildOrder = [];

	// To serve as the set of projects built in previous iterations.
	const built = {};

	while (Object.keys(built).length < projects.length) {
		const unbuilt = _.difference(projects, Object.keys(built));
		const candidates = _.filter(unbuilt, (project) => {
			return _.difference(Object.keys(nodes[project].children), Object.keys(built)).length === 0;
		});

		for (const candidate of candidates) {
			buildOrder.push(candidate);
			built[candidate] = true;
		}
	}

	return buildOrder;

}
