const express = require('express');
const cors = require('cors');
const { posts, comments } = require('./data/posts');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    const postComments = comments[req.params.id] || [];
    res.json({ ...post, comments: postComments });
});

app.post('/posts/:id/comments', (req, res) => {
    const { text } = req.body;
    const id = req.params.id;
    const newComment = { id: Date.now(), text };
    if (!comments[id]) comments[id] = [];
    comments[id].push(newComment);
    res.status(201).json(newComment);
});

app.listen(4000, () => {
    console.log('Serwer działa na http://localhost:4000');
});
