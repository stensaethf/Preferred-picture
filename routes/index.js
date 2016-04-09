var express = require('express');
var router = express.Router();

// Models
var mongoose = require('mongoose');
var Picture = mongoose.model('Picture');
var Vote = mongoose.model('Vote');

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
