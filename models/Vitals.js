const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  pat_id: {
    type: String,
    required: true,
  },
  bp: String,
  temperature: String,
  pulse: String,
  sp02: String,
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
