app.post("/api/appointmentSchema", (req, res) => {
    console.log(req.body);
    appointmentSchema.push(req.body);
    res.json( { status: "ok" } );
});