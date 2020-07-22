const {
    helloWorld,
    findAllAppointments,
    createAppointment,
} = require('../controllers/appointment.controller');

module.exports = (app) => {
    app.get('/api/', helloWorld);
    app.post('/api/appointments', createAppointment);
    app.get('/api/appointments', findAllAppointments);
};
