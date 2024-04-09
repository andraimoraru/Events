import React, { createContext, useEffect, useState } from "react";
import { fetchEvents } from "../API/api";

export const EventsContext = createContext(null);



const EventsContextProvider = (props) => {

    const [all_events, setAll_Events] = useState([]);

    useEffect(() => {
        fetchEvents
        .then((response) => response.json())
        .then((data) => setAll_Events(data))
    }, [])


    const bookEvent = (itemId) => {
        alert("Event booked")
    }

    const getBookedEvents = (userId) => {
        alert("Will show booked events")
    }


    const contextValue = {getBookedEvents, bookEvent, all_events};

    return(
        <EventsContext.Provider value = {contextValue} >
            {props.children}
        </EventsContext.Provider>
    )

}

export default EventsContextProvider;