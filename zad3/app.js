var http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime-types');



http.createServer(function (req, res) {
    if (req.url === '/1') {
        res.write('Strona główna'); 
        res.end(); 
    }
    else if (req.url === '/2') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'To jest dokument JSON' }));
    } 
    else if (req.url === '/3') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>To jest dokument HTML generowany wewnątrz kodu</h1></body></html>');
    } 
    else if (req.url === '/4') {
        const filePath = path.join(__dirname, );
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Błąd serwera');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url === '/get_params') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const object = url.parse(req.url, true).query;
        console.log(object);
    
        let data = [];
        data.push(object);
        let date = Date.now();
    
        fs.writeFile(`params_${date}.txt`, JSON.stringify(data), (err) => {
            if (err) {
                throw err;
            }
        });
    
        const jsonResponse = JSON.stringify({
            ok: "ok",
        });
        res.end(jsonResponse);
    }
    else {
        const filePath = path.join(__dirname, 'assets', req.url);
        fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'File not found' }));
        } else {
            const mimeType = mime.lookup(filePath) || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': mimeType });
            res.write(mimeType);
            res.end();
        }
        });
    }
}).listen(8080);