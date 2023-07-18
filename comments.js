// Create web swerver 
const express = require('express');
const router = express.Router();

// Create a route for comments
router.get('/comments', (req, res) => {
    res.send('Comments page');
});

// Export router to make it available to other files
module.exports = router;