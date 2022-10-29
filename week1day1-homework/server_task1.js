var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/about', function(req, res) {
    res.send('About page');
});


app.get('/contact', function(req, res) {
    res.send('Contact Page');
});


app.listen(4000);
