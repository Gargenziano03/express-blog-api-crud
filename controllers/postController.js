const posts = require('../db/posts.js')

const index = (req, res) => {
    res.json({ data: posts, count: posts.length})
}

const show = (req, res) => {
    const post = posts.find((post) => post.title.toLowerCase() === req.params.title) 
    if (!post) {
        return res.status(404).json({ error: 'no post found with tha title'})
    }
    return res.status(200).json({ data: post})
};

module.exports = {
    index,
    show
}