const express = require('express');

const groceryData = require('../controllers/grocDataController');

const router = express.Router();

//Go to kroger database. Collect items if there else go to api connection to collect data and save it.
router.get('/', groceryData.getFood,)

