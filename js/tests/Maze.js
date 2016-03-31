import {
    mazeCellType as cellType,
    Maze,
    MazeError
} from '../Maze';
import assert from 'assert';
import chai from 'chai';

const expect = chai.expect;

describe('Maze', () => {
    describe('constructor', () => {
        it('should throw MazeError if maze is empty', () => {
            expect(() => {
                const maze = new Maze([], null);
            }).to.throw(MazeError);
        });
        it('should throw MazeError if maze has no start', () => {
            expect(() => {
                const maze = new Maze([ cellType.clear ], null);
            }).to.throw(MazeError);
        });
    });
    describe('findShortestPath', () => {
        it('should return empty path if maze has no exit', () => {
            const maze = new Maze([
                [ cellType.clear ]
            ], [ 0, 0 ]);
            const result = maze.findShortestPath();
            assert.deepEqual(result, []);
        });
        it('should return (0,0) (0,1) (1,1) in this 2x2 maze', () => {
            const maze = new Maze([ [
                cellType.clear,
                cellType.clear
            ], [
                cellType.obstruction,
                cellType.exit
            ] ], [ 0, 0 ]);
            const result = maze.findShortestPath();
            assert.deepEqual(result, [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ]);
        });
        it('should return (0,0, 1,0, 2,0, 2,1, 2,2) in this 3x3 maze', () => {
            const maze = new Maze([ [
                cellType.clear,
                cellType.clear,
                cellType.clear
            ], [
                cellType.clear,
                cellType.clear,
                cellType.clear
            ], [
                cellType.clear,
                cellType.clear,
                cellType.exit
            ] ], [ 0, 0 ]);
            const result = maze.findShortestPath();
            assert.deepEqual(result, [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]);
        });
    });
    describe('findPath', () => {
        it('should return empty path if maze has no exit', () => {
            const maze = new Maze([
                [ cellType.clear ]
            ], [ 0, 0 ]);
            const result = maze.findPath();
            assert.deepEqual(result, []);
        });
        it('should return (0,0) if start = exit in smallest maze', () => {
            const maze = new Maze([
                [ cellType.exit ]
            ], [ 0, 0 ]);
            const result = maze.findPath();
            assert.deepEqual(result, [ [ 0, 0 ] ]);
        });
        it('should return [] if start cell is an obstruction', () => {
            const maze = new Maze([ [
                cellType.obstruction,
                cellType.clear
            ], [
                cellType.clear,
                cellType.exit
            ] ], [ 0, 0 ]);
            const result = maze.findPath();
            assert.deepEqual(result, []);
        });
        it('should return (0,0, 0,1, 1,1) in 2x2 maze.', () => {
            const maze = new Maze([ [
                cellType.clear,
                cellType.clear
            ], [
                cellType.obstruction,
                cellType.exit
            ] ], [ 0, 0 ]);
            const result = maze.findPath();
            assert.deepEqual(result, [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ]);
        });
        it('should return [] in 2x2 maze filled with obstructions and no exit', () => {
            const maze = new Maze([ [
                cellType.clear,
                cellType.obstruction
            ], [
                cellType.obstruction,
                cellType.obstruction
            ] ], [ 0, 0 ]);
            const result = maze.findPath();
            assert.deepEqual(result, []);
        });
        it('should return (0,0, 1,0, 2,0, 2,1, 1,1, 0,1, 0,2, 1,2, 2,2) in this 3x3 maze', () => {
            const maze = new Maze([ [
                cellType.clear,
                cellType.clear,
                cellType.clear
            ], [
                cellType.clear,
                cellType.clear,
                cellType.clear
            ], [
                cellType.clear,
                cellType.clear,
                cellType.exit
            ] ], [ 0, 0 ]);
            const result = maze.findPath();

            // Not the shortest path. For that we need the power of BFS.
            assert.deepEqual(result, [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 1, 1 ], [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ]);
        });
    });
});
