const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema(
    {
        appointmentName: {
            type: String,
            required: [true, 'Name is required'],
            minlength: [2, 'Name must be at least 2 characters'],
        },
        date: {
            type: Date,
            required: [true, 'Date is required'],
        },
        email: {
            type: String,
        },
        phoneNumber: {
            type: Number, // TODO: I suggest we change this to a type: String
            required: [true, 'You must have a phone number]'],
        },
        focus: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
