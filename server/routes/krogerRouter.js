const express = require('express');
const groceryData = require('../controllers/groceryController');
const krogerController = require('../controllers/krogerController');
const router = express.Router();

// Route is /api

//Go to sql database. Collect items if there else go to api connection to collect data and save it.
router.get(
  '/',
  [krogerController.getToken, krogerController.getItem],
  (req, res) => {
    return res.status(200).json({
      success: true
    });
  }
);

module.exports = router;
