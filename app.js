const express = require('express')
const app = express()
const postRoutes = require('./routes/post.js')
const notFoundMiddleware = require('./middlewares/notFound.js')
app.use(express.json())

app.listen(3000, () => {
    console.log('server started on port 3000');
});

app.use('/posts', postRoutes)
app.use(notFoundMiddleware)
