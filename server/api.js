
/**
 * This file manages the initial api server calls 
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

var express = require('express');
var status = require('http-status');
var bodyParser = require('body-parser');

module.exports = function(wagner) {
	var api = express.Router();

 	api.use(bodyParser.json());
 	api.use(bodyParser.urlencoded({
  		extended: true
	}));

	api.get('/user/:username', wagner.invoke(function(User){
		return function(req, res) {
			User.findOne({username: req.params.username}, function(error, user) {
				if(error) {
					return res.
					status(status.INTERNAL_SERVER_ERROR).
					json({error: error.toString()});
				}
				if(!user) {
					return res.
					status(status.NOT_FOUND).
					json({error: 'Not Found'});
				}
				res.json({user: user});
			});
		};
	}));

	/** 
	 * This function creates a new User if validation passed as per User Schema
	 * @example
	 * 
	 * curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: e333feb0-5c46-36d7-3b40-77bd526df93c" -d '{
	 *		"username": "cancerianh",
	 *		"email": "harshit.chaudhary@y7mail.com",
	 *		"password": "showme",
	 *		"full_name": "Harshit Chaudhary",
	 *		"role": "user",
	 *		"levels": ["php", "yii2"]
	 *	}' "http://localhost:3000/api/v1/user/"
	 * @returns  {Object} Returns Json object either with success message or User Schema validation errors
	 */

	api.post('/user/', wagner.invoke(function(User) {
		return function(req, res) {
			var user = new User({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
				full_name: req.body.full_name,
				role: req.body.role,
				levels: req.body.levels,
				last_login: req.body.last_login
			});

			user.save(function(error) {
				if(error) {
					return res.
					status(status.INTERNAL_SERVER_ERROR).
					json({error: error.toString()});
				}

				res.json({success: "User saved successfulley"});
			});
		};
	}));
	
	return api;
}
