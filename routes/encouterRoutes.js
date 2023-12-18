const express = require('express');
const router = express.Router();
const Encounter = require('../models/Encouter'); // Import the Encounter model

// POST - Start an encounter for a patient
router.post('/', async (req, res, next) => {
  try {
    const newEncounter = await Encounter.create(req.body);
    res.status(201).json(newEncounter);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
