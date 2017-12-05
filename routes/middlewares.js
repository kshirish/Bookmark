const jwt    = require('jsonwebtoken');

module.exports = (router, app) => {

	router.use(function(req, res, next) {

		const token = req.body.token || req.param('token') || req.headers['x-access-token'];

		if (token)

			jwt.verify(token, app.get('superSecret'), function(err, decoded) {			

				if (err) {

					return res.status(400).json({ message: 'Failed to authenticate token.' });		

				} else {

					req.decoded = decoded;	
					next();
				}
			});

		else

			return res.status(403).json({ 
				message: 'No token provided.'
			});					
	});
};