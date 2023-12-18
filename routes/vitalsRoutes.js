const express = require('express');
const router = express.Router();
const Vitals = require('../models/Vitals'); // Import the Vitals model

// POST - Submit patient vitals by nurse
router.post('/', async (req, res, next) => {
  try {
    const newVitals = await Vitals.create(req.body);
    res.status(201).json(newVitals);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
