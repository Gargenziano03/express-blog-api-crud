const express = require('express')
const app = express()
const posts = require('./db/posts.js')
const postController = require('./controllers/postController.js')

app.listen(3000, () => {
    console.log('server started on port 3000');
});

app.get('/posts', postController.index);

app.get('/posts/:title', postController.show);