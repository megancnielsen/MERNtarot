const express = require('express');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.listen(port, () => console.log(`I'm in on port ${port}`));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );