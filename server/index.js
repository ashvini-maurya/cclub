
/**
 * This is basic init file that will bootstrap the application server
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

if (process.env.ENV === 'production') {
    let db = mongoose.connect('');
} else {
    let db = mongoose.connect('mongodb://localhost/c_club');
}

const app = express();

require('./models');

app.use('/', routes);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve('./../public')));

app.use('/api/v1', require('./routes'));

app.get('/', (req, res) => res.sendFile(path.resolve('./../public/index.html')));

app.listen(port, () => console.log('Listening on port 3000'));
