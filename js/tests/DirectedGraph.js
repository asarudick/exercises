import { DirectedGraph, DirectedGraphError } from '../DirectedGraph';
import assert from 'assert';
import chai from 'chai';

var expect = chai.expect;

describe('DirectedGraph', () => {
    const graph = new DirectedGraph();
    it('should not have any vertices', () => {
        const hasVertex = graph.hasVertex('A');
        assert.equal(hasVertex, false);
    });
    describe('addVertex', () => {
        it('should add the vertex with id: A', () => {
            graph.addVertex('A', null);
            const hasVertex = graph.hasVertex('A');
            assert.equal(hasVertex, true);
        });
        it('should add the vertex with id: B', () => {
            graph.addVertex('B', null);
            const hasVertex = graph.hasVertex('B');
            assert.equal(hasVertex, true);
        });
        it('should add the vertex with id: C', () => {
            graph.addVertex('C', null);
            const hasVertex = graph.hasVertex('C');
            assert.equal(hasVertex, true);
        });
        it('should fail to add the vertex with id: C', () => {
            expect(() => {
                graph.addVertex('C', 3);
            }).to.throw(DirectedGraphError);
        });
    });
    describe('addEdge', () => {
        it('should add the one-way edge A -> B', () => {
            graph.addEdge('A', 'B');
            const hasEdge = graph.hasEdge('A', 'B');
            assert.equal(hasEdge, true);
        });
        it('should add the one-way edge B -> C', () => {
            graph.addEdge('B', 'C');
            const hasEdge = graph.hasEdge('B', 'C');
            assert.equal(hasEdge, true);
        });
        it('should error when adding an existing one-way edge', () => {
            expect(() => {
                graph.addEdge('B', 'C');
            }).to.throw(DirectedGraphError);
        });
        it('should error when adding an edge where one vertex does not exist', () => {
            expect(() => {
                graph.addEdge('C', 'D');
            }).to.throw(DirectedGraphError);
        });
        it('should error when adding an edge where both vertices do not exist', () => {
            expect(() => {
                graph.addEdge('D', 'E');
            }).to.throw(DirectedGraphError);
        });
    });
    describe('removeEdge', () => {
        it('should error when removing a non-existing one-way edge', () => {
            expect(() => {
                graph.removeEdge('C', 'A');
            }).to.throw(DirectedGraphError);
        });
        it('should error when removing a one-way edge where one vertex does not exist', () => {
            expect(() => {
                graph.removeEdge('C', 'D');
            }).to.throw(DirectedGraphError);
        });
        it('should error when removing a one-way edge where both vertices do not exist', () => {
            expect(() => {
                graph.removeEdge('D', 'E');
            }).to.throw(DirectedGraphError);
        });
        it('should remove the edge A -> B', () => {
            graph.removeEdge('A', 'B');
            const hasEdge = graph.hasEdge('A', 'B');
            assert.equal(hasEdge, false);
        });
        it('should remove the edge B -> C', () => {
            graph.removeEdge('B', 'C');
            const hasEdge = graph.hasEdge('B', 'C');
            assert.equal(hasEdge, false);
        });
    });
    describe('dfs', () => {
        const g = new DirectedGraph();
        g.addVertex('A', 1);
        g.addVertex('B', 2);
        g.addVertex('C', 3);
        g.addVertex('D', 4);
        g.addVertex('E', 5);
        g.addVertex('F', 6);
        g.addEdge('A', 'B');
        g.addEdge('B', 'C');
        g.addEdge('C', 'D');
        g.addEdge('D', 'E');
        g.addEdge('E', 'F');
        it('should find F', () => {
            // Find the value 3, start at A.
            const matchedVertex = g.dfs('A', 6);
            assert.equal(matchedVertex.data, 6);
        });
    });
    describe('bfs', () => {
        const g = new DirectedGraph();
        g.addVertex('A', 1);
        g.addVertex('B', 2);
        g.addVertex('C', 3);
        g.addVertex('D', 4);
        g.addVertex('E', 5);
        g.addVertex('F', 6);
        g.addEdge('A', 'B');
        g.addEdge('A', 'C');
        g.addEdge('A', 'D');
        g.addEdge('A', 'E');
        g.addEdge('A', 'F');
        it('should find F', () => {
            // Find the value 3, start at A.
            const matchedVertex = g.bfs('A', 6);
            assert.equal(matchedVertex.data, 6);
        });
    });
});
