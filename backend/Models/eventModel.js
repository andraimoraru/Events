const { Event } = require("../Schemas/eventSchema")

exports.fetchAllEvents = async () => {
   const events = await Event.find();
   return events;
}

exports.addEvent = async (newEvent) => {
   const eventToAdd = new Event({...newEvent});
   return eventToAdd.save();
}