//Setup Router via Express
const express = require('express');
const router = express();

router.get('/', (req, res) => {
  res.render('index', {
    msg: 'Hello from Index'
  });
});

module.exports = router;
