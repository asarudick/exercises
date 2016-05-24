import RadixTree from '../RadixTree';
import assert from 'assert';
import chai from 'chai';

var expect = chai.expect;

describe('RadixTree', () => {
	describe('add', () => {
		let radixTree;

		beforeEach(() => {
			radixTree = new RadixTree();
		});

		it('should add the word "rock"', () => {
			radixTree.add('rock');
			assert.notEqual(radixTree.root.rock, undefined);
		});

		it('should add the word "rocker", and "rock"', () => {
			radixTree.add('rocker');
			radixTree.add('rock');
			assert.notEqual(radixTree.root.rock, undefined);
			assert.equal(radixTree.root.rocker, undefined);
		});

		it('should add the words "rock", and "test"', () => {
			radixTree.add('rock');
			radixTree.add('test');
			assert.notEqual(radixTree.root.test, undefined);
			assert.notEqual(radixTree.root.rock, undefined);
		});

		it('should add the words "rock", "rocker", "test", and "tester"', () => {
			radixTree.add('rock');
			radixTree.add('test');
			radixTree.add('rocker');
			radixTree.add('tester');
			assert.notEqual(radixTree.root.test, undefined);
			assert.notEqual(radixTree.root.rock, undefined);
			assert.equal(radixTree.root.tester, undefined);
			assert.equal(radixTree.root.rocker, undefined);
		});
	});
	describe('find', () => {
		let radixTree;

		beforeEach(() => {
			radixTree = new RadixTree();
		});

		it('should find the word "rock"', () => {
			radixTree.add('rock');
			assert.notEqual(radixTree.root.rock, undefined);
			const result = radixTree.find('rock');
			assert.equal(result.length, 1);
		});

		it('should find the word "rocker"', () => {
			radixTree.add('rock');
			radixTree.add('rocker');
			assert.notEqual(radixTree.root.rock, undefined);
			const result = radixTree.find('rock');
			assert.equal(result.length, 2);
		});

		it('should find the word "hack", and "hackerrank"', () => {
			radixTree.add('hack');
			radixTree.add('hackerrank');
			let result = radixTree.find('hac');
			assert.equal(result.length, 2);
			result = radixTree.find('hak');
			assert.equal(result.length, 0);
		});

		it('should find the word "hack", "hacker", "hatch, and "hatcher"', () => {
			radixTree.add('hack');
			radixTree.add('hacker');
			radixTree.add('hatch');
			radixTree.add('hatcher');
			const result = radixTree.find('ha');
			assert.equal(result.length, 4);
		});
	});
});
