var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('app/views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});
 
app.listen(4000, function () {
  console.log('App listening on port 4000!');
});