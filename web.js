var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')
var content = new Buffer(fs.readFileSync('index.html'))
var text = content.toString('utf8')

app.get('/', function(request, response) {  
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
