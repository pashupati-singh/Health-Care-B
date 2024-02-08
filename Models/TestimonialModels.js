const mongoose = require('mongoose');

const testimonialSchema =  mongoose.Schema({
    image : String,
    age: Number,
    profession : String,
    rating: Number,
    prblem: String,
    testimonial: String
})

const TestModel = mongoose.model('testimonial',testimonialSchema);

module.exports = {TestModel}