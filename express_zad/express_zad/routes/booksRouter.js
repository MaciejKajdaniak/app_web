const path = require('node:path');
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/books', (req, res) => {
    res.set('Content-Type', 'text/json')
    res.sendFile(path.join(__dirname,'..', 'data','books.json'))
})

router.get('/books/:id', (req, res) => {
    const books = JSON.parse(fs.readFileSync(path.join(__dirname,'..', 'data','books.json'), 'utf8'))
    const id = parseInt(req.params.id)

    const book = books.find(book => book.id === id)

    res.set('Content-Type', 'text/json')
    res.send(JSON.stringify(book, null, 2))
})

router.get('/add', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname,'..', 'views','add.html'))
})

router.post('/books', (req, res) => {
    const { title, author, year } = req.body
    const books = JSON.parse(fs.readFileSync(path.join(__dirname,'..', 'data', 'books.json'), 'utf8'))
    const id = books[books.length - 1].id + 1
    const newBook = {"id": id,"title": title,"author": author,"year": year}
    books.push(newBook)


    fs.writeFileSync(path.join(__dirname,'..', 'data', 'books.json'), JSON.stringify(books, null, 2), 'utf8')
    res.redirect(`/books`)
})

module.exports = router;