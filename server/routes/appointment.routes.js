module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.json({ message: 'Hello World' });
    });

    app.post('/api/appointmentSchema', (req, res) => {
        console.log(req.body);
        appointmentSchema.push(req.body);
        res.json({ status: 'ok' });
    });
};
