var express = require('express');
var path = require('path');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/components', function(req, res) {
    res.render('content');
});

app.listen(3000);

