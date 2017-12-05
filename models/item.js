const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Item', new Schema({ 
	link: String, 
	metaTitle: String,
	metaDescription: String,
	metaImage: String,
	tags: [String],
	rating: { 
		type: String, 
		enum: ['Ok', 'Good', 'Useful', 'Must']
	},
	addedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	createdOn: { type: Date, default: Date.now }
}));