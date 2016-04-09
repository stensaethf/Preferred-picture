var express = require('express');
var router = express.Router();

// Models
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = function() {
  // index.
  router.get('/', function(req, res) {
    res.render('index', {}, function(err, html){
	if (err) {
		console.log(err);
	}
	res.send(html);
	});
  });

  return router;
};
