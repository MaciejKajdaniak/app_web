const express = require('express')
const path = require("node:path");
const fs = require('fs');
const booksRouter = require('./routes/booksRouter');
const infoRouter = require('./routes/infoRouter');
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', booksRouter);
app.use('/', infoRouter);







app.listen(4000, () =>{
    console.log('Server running on port 4000')
})