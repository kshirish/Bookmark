const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({ 
	fullname: String, 
	username: String,  
	password: String, 
	createdOn: { type: Date, default: Date.now }
}));