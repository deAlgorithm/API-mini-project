const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
const encounterRoutes = require('./routes/encouterRoutes');
const vitalsRoutes = require('./routes/vitalsRoutes');

const app = express();

mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/patients', patientRoutes);
app.use('/encounters', encounterRoutes);
app.use('/vitals', vitalsRoutes);

app.use(function(error, req, res, next) {
  res.status(422).send({ error: error.message });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
