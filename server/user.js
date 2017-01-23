/**
 * This is the mongoose schema design for User Model/Schema
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>	 
 * @version 1.0
 */

 var mongoose = require('mongoose');
 var userSchema = {
		username: { type: String, required: true, lowercase: true },
		email: {type: String, required: true, match: /.+@.+\..+/, lowercase: true},
		password: {type: String, required: true},
		full_name: {type: String, required: true },
		role: {type: String, required: true},
		levels: [{type: String}],
		last_login: {type: Number}
	};

 module.exports = new mongoose.Schema(userSchema);
 module.exports.userSchema = userSchema;


