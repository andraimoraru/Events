const { fetchAllEvents  } = require("../Models/eventModel")


exports.getAllEvents = (req, res, next) => {
    fetchAllEvents().then((data) => {
        res.status(200).send(data)
    }).catch(next)
}