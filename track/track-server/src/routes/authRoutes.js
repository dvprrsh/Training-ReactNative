const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Made a post request');
});

module export router
