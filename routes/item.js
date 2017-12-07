const Item   = require('../models/item');
const fetchMeta = require('url-metadata');
const config = require('../config');

module.exports = router => {

	router.post('/items', (req, res) => {

		const { link = '', tags = '', rating = 'Ok' } = req.body;

		fetchMeta(link).then(function (metadata) {

			const item = new Item({ 
				link,
				tags: tags.split(','),
				rating,
				addedBy: req.decoded._id,
				metaTitle: metadata['title'] || metadata['og:title'],
				metaDescription: metadata['description'] || metadata['og:description'],
				metaImage: metadata['image'] || metadata['og:image']
			});

			item.save(function(err, item) {
				
				if (err) throw err;			

				res.json(item);
			});					

		},
		function (err) {

			if (err) throw err;

			res.json({ message: 'Item cannot be created.' });
		})
	});	

	router.delete('/items/:itemId', (req, res) => {

		Item.remove({ _id: req.params.itemId }, function(err) {
			
			if (err) throw err;
			
			res.json({ message: `Item ${ req.params.itemId } deleted.` });
		});
	});

	router.get('/items/:itemId', (req, res) => {

		Item.findById(req.params.itemId, function (err, item) { 

			if (err) throw err;

			res.json(item);
		});	
	});

	router.get('/items/user/:userId', (req, res) => {

		Item.find({ addedBy: req.params.userId }, function (err, items) { 

			if (err) throw err;

			res.json(items);
		});	
	});

	// TODO: add cache to this api
	router.get('/filters', (req, res) => {

		Item.find({}, 'tags -_id', function (err, tags) { 

			if (err) throw err;
			
			const items = tags.map(t => t.tags)
				.reduce(function(a, b) {
					return a.concat(b);
				});

			const uniqueItems = [ ...new Set(items) ]

			res.json({
				tags: items,
				ratings: config.ratings
			});
		})
	});
};