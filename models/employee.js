const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    gender: {type: String},
    salary: {type: String},
});


module.exports = Employee;
