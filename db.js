
const mongoose = require('mongoose')
require("dotenv").config()
const connect = mongoose.connect(process.env.URl)

module.exports = {connect}