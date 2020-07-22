const Appointment = require('../models/appointment.model');

module.exports.helloWorld = (req, res) => {
    res.json({ message: 'Isiah is the coolest' });
};

module.exports.findAllAppointments = (req, res) => {
    Appointment.find()
        .then((appointments) => console.log(appointments))
        .catch((err) =>
            res.json({
                message: 'Cannot find any appointments',
                error: err,
            })
        );
};

module.exports.postNewAppointment = (req, res) => {
    Appointment.create(req.body).then((newAppointment) =>
        res
            .json({
                appointment: newAppointment,
            })
            .catch((err) => {
                res.json({
                    message: 'Cannot find any appointments',
                    error: err,
                });
            })
    );
};

// console.log(req.body);
// appointmentSchema.push(req.body);
// res.json({ status: 'ok' })
