const express = require('express');
const { TestModel } = require('../Models/TestimonialModels');

const TestimonialRoutes = express.Router();

TestimonialRoutes.get('/', async(req,res)=>{
  try {
    const testimonial = await TestModel.find();
   return res.status(201).json(testimonial);
  } catch (error) {
    res.json(error)
  }
})

module.exports = {TestimonialRoutes}