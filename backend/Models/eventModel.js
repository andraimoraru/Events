const { Event } = require("../Schemas/eventSchema")

exports.fetchAllEvents = async () => {
   const events = await Event.find();
   return events;
}