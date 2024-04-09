const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const uri = require("./connection");
const { handle404, handle500 } = require('./Controllers/errorController');
const { getAllUsers, postUser } = require('./Controllers/userController');
const { getAllEvents, postEvent, getEventByID } = require('./Controllers/eventController');
const { port = 9090 } = process.env;
const jwt = require("jsonwebtoken");
const upload = require('./upload');
const { User } = require('./Schemas/userSchema');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/users", getAllUsers);
app.get("/events", getAllEvents);
app.get("/events/:eventID", getEventByID);

app.post("/event", postEvent);
app.post("/user", postUser);

// Creating endpoint for registering the user

app.post('/signup', async(req,res) => {

    let check = await User.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false, errors:"existing user found with same email address"})
    }

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_event');
    res.json({success:true, token});

})

// Creating endpoint for user login

app.post('/login', async (req,res) => {
    let user = await User.findOne({email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_event');
            res.json({success:true, token});
        }
        else {
            res.json({success:false, errors: "Wrong password"})
        }
    }
    else {
        res.json({success:false, errors: "Wrong email address"})
    }
})



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