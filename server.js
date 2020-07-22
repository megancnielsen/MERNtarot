const express = require('express');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.listen(port, () => console.log(`I'm in on port ${port}`));

// sends express() to routes module
const AllApiRoutes = require('./routes/appointment.routes');
AllApiRoutes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
