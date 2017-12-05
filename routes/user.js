const User   = require('../models/user');

module.exports = router => {

	router.delete('/users/:userId', function(req, res) {

		User.remove({ _id: req.params.userId }, function(err) {
			
			if (err) throw err;
			
			res.json({ message: `User ${ req.params.userId } deleted.` });
		});
	});

	router.get('/users/:userId', (req, res) => {

		User.findById(req.params.userId, function (err, user) { 

			if (err) throw err;

			res.json(user);
		});	
	});
};