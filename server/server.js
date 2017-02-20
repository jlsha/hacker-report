const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(express.static(__dirname + '/../client/'));

app.use('/api', router);

app.listen(8000, function () {	
  console.log('Listening on port 8000!')
});

