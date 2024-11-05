const express = require('express')
const app = express()
const posts = require('./db/posts.js')

app.listen(3000, () => {
    console.log('server started on port 3000');
});

app.get('/posts', (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
});

app.get('/posts/:title', (req, res) => {
    const post = posts.find((post) => post.title.toLowerCase() === req.params.title) 
    if (!post) {
        return res.status(404).json({ error: 'no post found with tha title'})
    }
    return res.status(200).json({ data: post})
});