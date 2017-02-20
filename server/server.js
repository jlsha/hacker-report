const express = require('express');
const path = require('path');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.all('*', function(req, res, next) {
     var origin = req.get('origin'); 
     res.header('Access-Control-Allow-Origin', origin);
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.use(cors());
app.use(express.static(__dirname + '/../client/'));

app.use('/api', router);

app.listen(8000, function () {	
  console.log('Listening on port 8000!')
});

