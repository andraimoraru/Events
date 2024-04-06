const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const uri = require("./connection");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/", (req, res) => {
    res.send("Express App is Running")
})

module.exports = app;