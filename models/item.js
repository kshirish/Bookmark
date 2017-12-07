const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

// set up a mongoose model
module.exports = mongoose.model('Item', new Schema({ 
	link: String, 
	metaTitle: String,
	metaDescription: String,
	metaImage: String,
	tags: [String],
	rating: { 
		type: String, 
		enum: config.ratings
	},
	addedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	createdOn: { type: Date, default: Date.now }
}));