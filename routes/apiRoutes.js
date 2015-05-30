var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Paste = require('../models/Paste.js');

/* GET pastes listing. */
router.get('/pastes', function(req, res) {
    Paste.find(function (err, paste) {
        if (err) 
            console.log(err)

        res.json(paste);
    });
});

router.get('/pastes/reset', function(req, res) {
    console.log("hjere");
    Paste.remove({}, function(err) { 
        if (err)
            console.log(err)

        res.json([])
    });
});

/* GET paste. */
router.get('/pastes/:id', function(req, res) {
    Paste.findById(req.params.id, function (err, paste) {

        if (err)
             console.log(err)

        res.json(paste);
    });
});

/* POST create paste*/
router.post('/pastes', function(req, res) {
    Paste.create(req.body, function (err, paste) {
        if(err)
             console.log(err)
        res.json(paste);
  });
});




module.exports = router;
