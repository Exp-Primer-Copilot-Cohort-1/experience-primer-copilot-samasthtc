// Create web server

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController')
const {check} = require('express-validator');
const auth = require('../middleware/auth');

// Add comment
// api/comments
router.post('/', 
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty()
    ],
    commentsController.addComment
);

// Get all comments
router.get('/',
    auth,
    commentsController.getComments
);

// Update comment
router.put('/:id',
    auth,
    commentsController.updateComment
);

// Delete comment
router.delete('/:id',
    auth,
    commentsController.deleteComment
);

module.exports = router;