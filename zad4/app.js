const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime-types');

app.get('/1', (req, res) => {
    res.send('Strona główna');
});

app.get('/2', (req, res) => {
    res.json({ message: 'To jest dokument JSON' });
});

app.get('/3', (req, res) => {
    res.send('<html><body><h1>To jest dokument HTML generowany wewnątrz kodu</h1></body></html>');
});

app.get('/4', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(500).send('Błąd serwera');
        } else {
            res.set('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

app.get('/get_params', (req, res) => {
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

    res.json({ ok: "ok" });
});

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'assets', req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(404).json({ error: 'File not found' });
        } else {
            const mimeType = mime.lookup(filePath) || 'application/octet-stream';
            res.set('Content-Type', mimeType);
            res.send(`MIME Type: ${mimeType}\n${data}`);
        }
    });
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});