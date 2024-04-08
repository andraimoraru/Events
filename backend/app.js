const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const uri = require("./connection");
const { handle404, handle500 } = require('./Controllers/errorController');
const { getAllUsers, postUser } = require('./Controllers/userController');
const { getAllEvents, postEvent } = require('./Controllers/eventController');
const { port = 9090 } = process.env;
const upload = require('./upload');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/users", getAllUsers);
app.get("/events", getAllEvents);

app.post("/event", postEvent);
app.post("/user", postUser);


app.get("/", (req, res) => {
    res.send("Express App is Running")
})

//Creating upload endpoint for images

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('event'), (req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:9090/images/${req.file.filename}`
    })
})


app.use(handle404)
app.use(handle500);


module.exports = app;