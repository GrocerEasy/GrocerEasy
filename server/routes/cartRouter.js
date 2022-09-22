const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

// Route is /cart

// Update the current user's cart in the database with the current state held in front-end
router.post('/update', cartController.update, (req, res) => {
  return res.status(200).json('Items successfully added to cart');
});

// Get current user's cart when they successfully login
router.get('/getcart/:id', cartController.getCart, (req, res) => {
    
})

module.exports = router;