const PortfolioItem = require('../models/PortfolioItem');

exports.getAllPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await PortfolioItem.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPortfolioItemById = async (req, res) => {
  try {
    const portfolioItem = await PortfolioItem.findById(req.params.id);
    if (!portfolioItem) {
      return res.status(404).json({ error: 'Portfolio item not found' });
    }
    res.json(portfolioItem);
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

// Implement update and delete methods similarly.
