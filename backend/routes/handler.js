const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const contactController = require('../controllers/contactController');
// Define routes for portfolio items
router.get('/api/portfolio',  portfolioController.getPortfolioItems);
router.post('/api/portfolio',  portfolioController.createPortfolioItem);
// Add more routes as needed (update, delete)

// Define route for contact form submission
router.post('/api/contact',  contactController.submitContactForm);

module.exports = router;
