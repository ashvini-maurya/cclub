
/**
 * This file manages the initial api server calls 
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
	var api = express.Router();

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
	
	return api;
}
