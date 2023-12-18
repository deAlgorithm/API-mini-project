const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  pat_id: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  othernames: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  phone_number: String,
  residential_address: String,
  emergency_name: String,
  emergency_contact: String,
  relationship_with_patient: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
