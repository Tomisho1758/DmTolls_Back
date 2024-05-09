const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/DataBase/dataBase");
const mainRoutes = require("./src/Routes/mainRoutes");

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());
// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route middleware
app.use("/", mainRoutes);

// Database synchronization and server listening
db.conn.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
