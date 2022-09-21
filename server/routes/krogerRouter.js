const express = require('express');
const groceryData = require('../controllers/groceryController');
const krogerController = require('../controllers/krogerController');
const router = express.Router();

// Route is /api

//Go to sql database. Collect items if there else go to api connection to collect data and save it.
// router.post('/', krogerController.getToken, (req, res) => {
//   return res.status(200).json(res.locals.tokenData);
// });
// router.get('/location/:zipCode', krogerController.getLocation, (req, res) => {
//   return res.status(200).json(res.locals.locationInfo);
// });
// router.get('/:item/:location', krogerController.getItem, (req, res) => {
//   return res.status(200).json(res.locals.itemInfo);
// });

// Test route
router.get('/test', (req, res) => {
  return res.status(200).json([
    {
      success: true,
      msg: 'Hello from the backend'
    }
  ]);
});

module.exports = router;
