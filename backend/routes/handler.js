const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const contactController = require('../controllers/contactController');

 //Define route for the root URL ("/")
router.get('/', (req, res) => {
  res.send('Welcome to the portfolio app!');
});



// Import contactRoutes.js
const contactRoutes = require('./contactRoutes');

// Define routes for portfolio items
router.get('/portfolio', portfolioController.getPortfolioItems);
router.post('/portfolio', portfolioController.createPortfolioItem);
// Add more routes for other portfolio operations (update, delete) as needed

// Use contactRoutes as middleware
router.use('/contact', contactRoutes);

module.exports = router;
