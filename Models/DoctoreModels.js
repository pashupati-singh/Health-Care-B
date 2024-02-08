const mongoose = require('mongoose');

const DoctorSchema =  mongoose.Schema({
    image : String,
    degree: String,
    year : Number,
    name: String,
    experties: String,
})

const DocModel = mongoose.model('doctor',DoctorSchema);

module.exports = {DocModel}