var express = require('express');
var router = express.Router();

// Models
var mongoose = require('mongoose');
var Picture = mongoose.model('Picture');
var Vote = mongoose.model('Vote');
var User = mongoose.model('User');

module.exports = function() {
  // index.
  router.get('/', function(req, res) {
    res.render('index');
  });

  return router;
};
