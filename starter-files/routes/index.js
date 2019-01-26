const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// Do work here
router.get('/', storeController.homepage);
router.get('/add', storeController.homepage);

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});
module.exports = router;
