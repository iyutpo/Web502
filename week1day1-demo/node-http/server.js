var path = require('path');
var fs = require('fs');

var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    // console.log(req.headers);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>Hello World!</h1></body></html>');
    console.log(`Request for ${req.url} by method ${req.method}`);
    if (req.method === `GET`) {
        var fileUrl = req.url;
        if (fileUrl === '/') {
            fileUrl = '/index.html';
        }
        var filePath = path.resolve('./public' + fileUrl);
        var fileExt = path.extname(filePath);
        if (fileExt === '.html') {
            fs.access(filePath, function(err) {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found </h1></body></html>`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} is not an HTML file</h1></body></html>`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${req.method} not supported </h1></body></html>`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

