const express = require('express');
const path = require('path');
var app = express();


app.get('/:pageId', function(req, res) {
    if (req.params['pageId'] === 'home') {
        res.sendFile(path.join(__dirname, '/home.html'));
    } else if (req.params['pageId'] === 'contact') {
        res.sendFile(path.join(__dirname, '/contact.html'));
    } else if (req.params['pageId'] === 'about') {
        res.sendFile(path.join(__dirname, '/about.html'));
    } else {
        res.send('404 Error!');
    }
});





app.listen(4000);





