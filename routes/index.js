var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.findAll().then(function(results) {
    res.render('index', { data : results });
  })
});

module.exports = router;
