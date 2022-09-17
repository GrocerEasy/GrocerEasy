const express = require('express');

const groceryData = require('../controllers/groceryController');

const router = express.Router();

//Go to sql database. Collect items if there else go to api connection to collect data and save it.
router.get('/', groceryData.getFood,)

