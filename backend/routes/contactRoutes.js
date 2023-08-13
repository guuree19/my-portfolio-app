const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define route for contact form submission
router.post('/', contactController.submitContactForm);

module.exports = router;
