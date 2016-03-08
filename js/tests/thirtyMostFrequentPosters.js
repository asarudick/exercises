var assert = require('assert');
var thirtyMostFrequentPosters = require('../thirtyMostFrequentPosters');

function Post(title, date, user) {
	this.title = title;
	this.date = date;
	this.user = user;
}

describe('thirtyMostFrequentPosters', () => {
	it('should return Jimbob and Jane, in that order.', () => {
		var posts = [
			new Post('A', new Date(), {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('B', new Date(), {
				id: 2,
				name: 'Jane'
			}),
			new Post('C', new Date() - 10000, {
				id: 2,
				name: 'Jane'
			}),
			new Post('D', new Date() - 20000, {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('E', new Date() - 10000, {
				id: 1,
				name: 'Jimbob'
			})
		];
		var result = thirtyMostFrequentPosters(posts);
		assert.equal(result.length, 2);
		assert.equal(result[0].name, 'Jimbob');
		assert.equal(result[1].name, 'Jane');
	});
	it('should return Jimbob and Jane and Johnny, in that order.', () => {
		var posts = [
			new Post('A', new Date(), {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('B', new Date(), {
				id: 2,
				name: 'Jane'
			}),
			new Post('C', new Date() - 10000, {
				id: 2,
				name: 'Jane'
			}),
			new Post('D', new Date() - 20000, {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('E', new Date() - 10000, {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('F', new Date() - 80000, {
				id: 3,
				name: 'Johnny'
			})
		];
		var result = thirtyMostFrequentPosters(posts);
		assert.equal(result.length, 3);
		assert.equal(result[0].name, 'Jimbob');
		assert.equal(result[1].name, 'Jane');
		assert.equal(result[2].name, 'Johnny');
	});

	it('should not return posts more than 90 days old', () => {
		var beforeNinetyDaysAgo = new Date() - (24*60*60*1000*90) - 1;
		var posts = [
			new Post('A', beforeNinetyDaysAgo, {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('D', beforeNinetyDaysAgo, {
				id: 1,
				name: 'Jimbob'
			}),
			new Post('E', new Date() - 10000, {
				id: 2,
				name: 'Jane'
			}),
			new Post('F', new Date(), {
				id: 3,
				name: 'Johnny'
			})
		];
		var result = thirtyMostFrequentPosters(posts);
		assert.equal(result.length, 2);
		assert.equal(result[0].name, 'Jane');
		assert.equal(result[1].name, 'Johnny');
	});
});
