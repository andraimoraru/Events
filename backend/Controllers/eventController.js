const { fetchAllEvents, addEvent } = require("../Models/eventModel")


exports.getAllEvents = (req, res, next) => {
    fetchAllEvents().then((data) => {
        res.status(200).send(data)
    }).catch(next)
}

exports.postEvent = (req, res, next) => {
    const event = {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date_created: req.body.date_created,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        url: req.body.url,
        slots: req.body.slots,
        attendees: req.body.attendees,
    };
    addEvent(event).then((data) => {
        res.status(201).send({addedEvent: data})
    }).catch(next)

};