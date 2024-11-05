const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')

router.get('/', postController.index);

router.get('/:title', postController.show);

router.post('/posts', postController.store)

module.exports = router