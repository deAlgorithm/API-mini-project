const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient'); // Import the Patient model

// POST - Register a patient
router.post('/', async (req, res, next) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (err) {
    next(err);
  }
});

// GET - Get all patients
router.get('/', async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    next(err);
  }
});

// GET - Get a specific patient by ID
router.get('/:pat_id', async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.pat_id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
