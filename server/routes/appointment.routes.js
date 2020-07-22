const AppointmentController = require('../controllers/appointment.controller');

const { helloWorld, findAllAppointments, postNewAppointment } = AppointmentController;

module.exports = (app) => {
    app.get('/api/', helloWorld);
    app.get('/api/appointments', findAllAppointments);
    app.post('/api/appointments', postNewAppointment);
};
