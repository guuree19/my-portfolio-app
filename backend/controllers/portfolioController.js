const PortfolioItem = require('../models/PortfolioItem'); // Import your PortfolioItem model

exports.getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await PortfolioItem.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createPortfolioItem = async (req, res) => {
  try {
    const newPortfolioItem = new PortfolioItem(req.body);
    const savedItem = await newPortfolioItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//other controller methods (update, delete, etc.) similarly.
