// create web server for comment
// import express
const express = require('express');
// create router
const router = express.Router();
// import comment controller
const commentController = require('../controllers/comments_controller');

// router for creating comment
router.post('/create', commentController.create);

// router for deleting comment
router.get('/destroy/:id', commentController.destroy);

// export router
module.exports = router;

