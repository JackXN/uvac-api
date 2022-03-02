const Employee = require('../models/Employee');



const router = require('express').Router();

// Create new employee
router.post('/', async (req,res) => {
    const newEmployee = new Employee(req.body);

    try {
        const savedEmployee = await newEmployee.save();
        res.status(200).json(savedEmployee);
    }catch (err) {
        console.log(err)
    }
});

// Get all employees
router.get('/', async(req,res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees)
    }catch(err) {
        console.log(error)
    }
})



module.exports = router;