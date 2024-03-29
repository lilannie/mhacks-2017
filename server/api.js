const express = require('express'),
	router = express.Router(),
	db = require('./db');

/** USER **/
router.post('/user', (req, res) => {
	console.log('POST /api/user');
	const {username, password, phoneNumber} = req.body;

	db.createUser(username, password, phoneNumber, (user, error) => {
		res.type('json');

		if (error) {
			console.log('error' + error);
			res.status(403);
			res.send({
				status: 'Unauthorized',
			});
		}
		else {
			console.log(user);
			res.status(200);
			res.send({
				status: 'success',
				user
			});
		}
	});
});

router.post('/login', (req, res) => {
	console.log('POST /api/login');
	const {username, password} = req.body;

	db.login(username, password, () => {
		res.status(200);
		res.type('json');
		res.send({
			status: 'success',
			username
		});
		res.end();
	});
});

/** POSTS **/
router.post('/post', (req, res) => {
	console.log('POST /api/post');
	const { title, description, category } = req.body;

	db.createPost(title, description, category, () => {
		res.status(200);
		res.type('json');
		res.send({
			status: 'success'
		});
		res.end();
	});
});

router.put('/post', (req, res) => {
	console.log('PUT /api/post');
	const { id, title, description } = req.body;

	db.updatePost({id, title, description}, () => {
		res.status(200);
		res.type('json');
		res.send({
			status: 'success'
		});
		res.end();
	});
});

router.get('/posts', (req, res) => {
	console.log('GET /api/posts');

	db.getPosts(posts => {
		res.status(200);
		res.type('json');
		res.send({
			status: 'success',
			posts
		});
		res.end();
	});
});

module.exports = router;
