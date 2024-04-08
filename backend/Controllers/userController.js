const { fetchAllUsers, addUser } = require("../Models/userModel")

exports.getAllUsers = (req, res, next) => {

    fetchAllUsers().then((data) => {
        res.status(200).send(data)
    }).catch(next);
}

exports.postUser = (req, res, next) => {

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        eventData: [],
        isStaff: false,
    };
    addUser(user).then((data) => {
        res.status(201).send({addedUser: data})
    }).catch(next)
}

