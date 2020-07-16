const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.schema({
    appointmentName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: [true, "You must have a phone number]"],
    },
    focus: {
        type: String,
    }
})

model.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);