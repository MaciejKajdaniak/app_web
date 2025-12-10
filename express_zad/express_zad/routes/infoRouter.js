
const  path = require("node:path");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname,'..', 'views','index.html'))
})

router.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname,'..', 'views','about.html'))
})

module.exports = router;
