const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = 'pirates';

//middleware
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//connect to the db
require("./config/config")(DB)

//connect routes
require("./routes/routes")(app)

// start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );