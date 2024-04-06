const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const uri = require("./connection");
const { handle404, handle500 } = require('./Controllers/errorController');
const { getAllUsers } = require('./Controllers/userController');
const { getAllEvents } = require('./Controllers/eventController');
const { port = 9090 } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", getAllUsers);
app.get("/events", getAllEvents)


mongoose.connect(uri);

app.get("/", (req, res) => {
    res.send("Express App is Running")
})




app.use(handle404)
app.use(handle500);


module.exports = app;