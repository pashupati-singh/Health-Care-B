
const express = require('express');
const { connect } = require('./db');
const { DoctorRoutes } = require('./Routes/Doctor.Routes');
const { TestimonialRoutes } = require('./Routes/Testimonial.Routes');
const app =  express();
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/doc',DoctorRoutes)
app.use('/testimonial',TestimonialRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,async()=>{
    try {
        console.log("port is running")
        await connect;
        console.log("server is connected")
    } catch (error) {
        console.log(error);
    }
})