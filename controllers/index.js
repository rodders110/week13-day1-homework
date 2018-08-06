const express = require('express');
const router = new express.Router();

router.use('/books', require('./books'));
router.use('/films', require('./films'));

router.get('/', function(req, res){
    res.json({data: 'Welcome!'});
})

router.get('/about', function(req, res){
    res.json ({data: "Week 13 day 1 homework - RESTful paths"});
})

module.exports = router;