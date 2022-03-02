const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema(
    {
        employeeID: {type: String, required: true, unique: true},
        title: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        adress: {type: String, required: false, unique: true},
        contact: {
            phoneNumber: {type: String, required: false, unique: true},
            emailAdress: {type: String, required: true, unique: true}
        },
        notes: {type: String, required: false},
    }
)

module.exports = mongoose.model('Employee', EmployeeSchema);