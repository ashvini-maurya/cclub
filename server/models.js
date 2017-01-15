/**
 * This function groups all the models and insert them as dependency injection using wagner
 * @author Harshit chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

 var mongoose = require('mongoose');
 
 module.exports = function(wagner) { 
		mongoose.connect('mongodb://localhost:27017/cclub');
		
		var User = mongoose.model('User', require('./user'), 'users');
	
		wagner.factory('User', function() {
			return User;
		});
		
		return {
			User: User
		}
	};
