/**
 * This file manages the initial api server calls
 * @author Harshit Chaudhary <harshit.chaudhary@y7mail.com>
 * @version 1.0
 */

const users = require('express').Router();
const status = require('http-status');

users.get('/user/:username', (req, res) => {
  User.findOne({ username: req.params.username }, (error, user) => {
    if (error) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
    }
    if (!user) {
      return res.status(status.NOT_FOUND).json({ error: 'Not Found' });
    }
    return res.json({ user });
  });
});

module.exports = users;
