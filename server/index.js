
/** 
 * This is basic init file that will bootstrap the application server
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

 var express = require('express');
 var wagner = require('wagner-core');

 
 require('./models')(wagner);
 

 var app = express();

 app.use('/api/v1', require('./api')(wagner));
 

 app.listen(3000);
 console.log('Listening on port 3000');
