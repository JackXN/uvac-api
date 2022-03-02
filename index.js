const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();


//routes
const employeeRoute = require('./routes/employee');

const PORT = process.env.PORT;



mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Access to database granted....')
})
.catch((error) => {
    console.log(error)
}) 


app.use(cors());
app.use(express.json());
app.use('/api/employee', employeeRoute);


app.listen(process.env.PORT || 5000,  () => console.log(`UVAC server is running on PORT ${PORT}`))