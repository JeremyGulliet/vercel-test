var express = require('express');
var router = express.Router();


router.get('/', function(req, res,) {
    const date = new Date().getFullYear();
  res.json({ year: date });
});

module.exports = router;