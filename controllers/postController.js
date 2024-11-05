const posts = require('../db/posts.js')

const index = (req, res) => {
    res.json({ data: posts, count: posts.length})
}

module.exports = {
    index
}