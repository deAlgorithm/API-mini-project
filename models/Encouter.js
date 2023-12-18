const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  pat_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    required: true,
  },
  type_of_encounter: {
    type: String,
    enum: ['emergency', 'opd', 'specialistcare'],
    required: true,
  },
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
