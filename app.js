const express = require ("express")
const app = express()
const port = 3000


const db = require('./src/DataBase/dataBase');

db.conn.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err );
    });


// app.listen (port, ()=>{console.log("el server esta andando")})