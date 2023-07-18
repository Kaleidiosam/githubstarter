// Create web server
// Created by: Fredrik Lautrup
// Last edit: 05.11.2013 by Fredrik Lautrup

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET comments listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

// POST a comment
router.post('/', function(req, res) {
    // Get the comment from the request
    var comment = req.body.comment;

    // Get the id of the user that is posting the comment
    var user_id = req.session.user_id;

    // Get the id of the post that the comment is posted on
    var post_id = req.body.post_id;

    // Insert the comment into the database
    db.query("INSERT INTO comments (comment, user_id, post_id) VALUES (?, ?, ?)", [comment, user_id, post_id], function(err, result) {
        // If there is an error, send the error to the user
        if(err) {
            console.log(err);
            res.send({error: "There was an error posting the comment"});
        } else {
            // Send a response to the user
            res.send({success: "Comment posted"});
        }
    });
});

module.exports = router;