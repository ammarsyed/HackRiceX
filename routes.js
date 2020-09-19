const express = require('express');
const router = express.Router();
let Bikes = require('./models/temp.js');

//get all bikes
router.get('/',function(req, res) {
    Bikes.find(function(err, bikes) {
        if (err) {
            console.log(err);
        } else {
            res.json(bikes);
        }
    });
});

module.exports = router;