const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

router.get('/topstories', function (req, res) {
	request('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', function(err, response, body) {
		res.send(body)		
	})
});

module.exports = router;