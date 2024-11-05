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