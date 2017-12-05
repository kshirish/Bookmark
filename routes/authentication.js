const User   = require('../models/user');
const jwt    = require('jsonwebtoken');

module.exports = (router, app) => {

	router.post('/authenticate', function(req, res) {

		// find the user
		User.findOne({
			username: req.body.username
		}, function(err, user) {

			if (err) throw err;

			if (!user) {

				res.json({ message: 'Authentication failed. User not found.' });

			} else if (user) {

				if (user.password != req.body.password) {

					res.json({ message: 'Authentication failed. Wrong password.' });

				} else {

					const payload = {
						fullname: user.fullname
					};

					const token = jwt.sign(payload, app.get('superSecret'), {
						expiresIn: 86400 // expires in 24 hours
					});

					res.json({
						message: 'Enjoy your token!',
						token
					});
				}		
			}
		});
	});

	router.post('/users', function(req, res) {
	
		const user = new User({ 
			fullname: req.body.fullname, 
			username: req.body.username,
			password: req.body.password
		});

		user.save(function(err) {
			
			if (err) throw err;

			res.json({ message: 'User has been created.' });
		});
	});	

}