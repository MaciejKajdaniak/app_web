var http = require('http');
const fs = require('fs');
const path = require('path');

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
        const filePath = path.join(__dirname, 'index.html');
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
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Nie znaleziono');
    }
}).listen(8080);