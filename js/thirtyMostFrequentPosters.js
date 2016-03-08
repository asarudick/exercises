// Input: Array of post objects of the form:
//
// {
// 		title: '',
// 		time: Date(),
// 		user: {
// 			id: 1
// 			name: 'Jimbob'
// 		}
// }

// Expected output: Array of user objects of the form:
//
// {
// 		name: 'Jimbob',
// 		latest_post_title: ''
// }
(function() {
	'use strict';

	function sortByLastTime(a, b) {
		// a is less than b by some ordering criterion
		if (a.time < b.time) {
			return -1;
		}
		// a is greater than b by the ordering criterion
		if (a.time > b.time) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}

	function sortByMostFrequent(a, b) {
		// a is less than b by some ordering criterion
		if (a.num_of_posts > b.num_of_posts) {
			return -1;
		}
		// a is greater than b by the ordering criterion
		if (a.num_of_posts < b.num_of_posts) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}

	function NinetyDaysAgo () {
		return new Date() - (24*60*60*1000*90);
	}

	function thirtyMostFrequentPosters(posts) {

		// Get only posts in the last 3 months.
		let latestPosts = posts.filter((a) => {
			return a.date >= NinetyDaysAgo();
		});

		// Sort by time descending order.
		latestPosts = latestPosts.sort(sortByLastTime);

		// Time to count the # of posts per user.
		let users = {};

		// Would use lodash here. forEach() is incredibly slow.
		latestPosts.forEach((post) => {
			let currentUserId = post.user.id;

			// If it doesn't exist, put something in there.
			if (users[currentUserId] === undefined) {
				// num_of_posts starts at 0, we'll increment after.
				users[currentUserId] = {
					num_of_posts: 0
				};
			}

			// Increment and update latest post title.
			users[currentUserId].num_of_posts++;
			users[currentUserId].name = post.user.name;
			users[currentUserId].last_post_title = post.title;
		});

		let result = [];
		
		for (var user in users) {
			result.push({
				name: users[user].name,
				last_post_title: users[user].last_post_title,
				num_of_posts: users[user].num_of_posts
			});
		}

		return result.sort(sortByMostFrequent);
	}

	module.exports = thirtyMostFrequentPosters;
}());
