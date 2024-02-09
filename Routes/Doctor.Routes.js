const express = require('express');
const { DocModel } = require('../Models/DoctoreModels');

const DoctorRoutes = express.Router();

DoctorRoutes.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    const doctors = await DocModel.find({ location: city });
   return res.send(doctors);
  } catch (error) {
    console.error(error);
   return res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = {DoctorRoutes}