import Vertex from './Vertex';

export class DirectedGraphError {
    constructor (message) {
        this.name = 'DirectedGraphError';
        this.message = message;
        this.stack = (new Error()).stack;
    }
}

export class DirectedGraph {
    constructor () {
        this.vertices = {};
    }

    addVertex (id, data) {
        if ( this.hasVertex(id) )
        {
            throw new DirectedGraphError('Vertex already exists.');
        }

        this.vertices[id] = new Vertex(id, data);
    }

    // TODO: Implement. Have to remove edges too.
    removeVertex(id) {
        if ( !this.hasVertex(id) )
        {
            throw new DirectedGraphError('Vertex does not exist.');
        }
    }

    hasVertex (id) {
        return this.vertices[id] !== undefined;
    }

    addEdge (src, dest) {
        if ( this.vertices[src] === undefined )
        {
            throw new DirectedGraphError('src vertex does not exist.');
        }

        if ( this.vertices[dest] === undefined )
        {
            throw new DirectedGraphError('dest vertex does not exist.');
        }

        if ( this.hasEdge(src, dest) )
        {
            throw new DirectedGraphError('edge already exists.');
        }

        this.vertices[src].addEdge(dest);
    }

    removeEdge (src, dest) {
        if ( !this.hasEdge(src, dest) )
        {
            throw new DirectedGraphError('edge does not exist.');
        }

        this.vertices[src].removeEdge(dest);
    }

    hasEdge (src, dest) {
        return this.vertices[src] !== undefined && this.vertices[src].hasEdge(dest);
    }

    dfs (start, match) {
        const stack = [];
        const visited = {};

        stack.push(this.vertices[start]);

        while (stack.length)
        {
            const vertex = stack.pop();

            visited[vertex.id] = true;

            if ( vertex.data === match )
            {
                return vertex;
            }

            for (var i = 0, edges = Object.keys(vertex.edges); i < edges.length; i++) {
                // Ignore ones already visited.
                if ( visited[this.vertices[edges[i]]] !== undefined )
                {
                    continue;
                }

                // Push all unvisited.
                stack.push(this.vertices[edges[i]]);
            }
        }

        return null;

    }

    bfs (start, match) {
        const queue = [];

        queue.push(this.vertices[start]);

        while (queue.length)
        {
            const vertex = queue.shift();

            if ( vertex.data === match )
            {
                return vertex;
            }

            for (var i = 0, edges = Object.keys(vertex.edges); i < edges.length; i++) {
                // Push all unvisited.
                queue.push(this.vertices[edges[i]]);
            }
        }

    }
}
