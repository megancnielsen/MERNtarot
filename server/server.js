const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

// sends express() to routes module
const AllApiRoutes = require('./routes/appointment.routes');
AllApiRoutes(app);

app.listen(port, () => console.log(`I'm in on port ${port}`));
