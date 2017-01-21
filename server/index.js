
/** 
 * This is basic init file that will bootstrap the application server
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

var express = require('express');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var routes = require('./routes');
var db;

if (process.env.ENV == 'production') {
    db = mongoose.connect(''); 
} else {
    db = mongoose.connect('mongodb://localhost/c_club');
}

var app = express();

require('./models');
app.use('/', routes);

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var app = express();

app.use(express.static(path.resolve(__dirname + '/../public')));
 
app.use('/api/v1', require('./routes'));
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(port, function(){
    console.log('Listening on port 3000');
});
