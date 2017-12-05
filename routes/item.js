const Item   = require('../models/item');
const fetchMeta = require('url-metadata');

module.exports = router => {

	router.post('/items', function(req, res) {

		const { link = '', tags = [], rating = 'Ok', addedBy } = req.body;

		fetchMeta(link).then(function (metadata) {

			const item = new Item({ 
				link,
				tags,
				rating,
				addedBy,
				metaTitle: metadata['title'] || metadata['og:title'],
				metaDescription: metadata['description'] || metadata['og:description'],
				metaImage: metadata['image'] || metadata['og:image']
			});

			item.save(function(err) {
				
				if (err) throw err;			

				res.json({ message: 'Item has been created.', metadata });
			});					

		},
		function (err) {

			if (err) throw err;

			res.json({ message: 'Item cannot be created.' });
		})
	});	

	router.delete('/items/:itemId', function(req, res) {

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
};