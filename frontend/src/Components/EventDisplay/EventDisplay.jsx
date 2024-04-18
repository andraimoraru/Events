import React from 'react';
import './EventDisplay.css';

export const EventDisplay = (event) => {

    const book_event = async (id) => {
        
    }
    
  return (
    <div className="">
                <div className="eventdisplay">
                <div className='eventdisplay-left'><img className='image' src={event.image} alt="" /></div>
                    <div className="eventdisplay-right">
                        <div className="event_title"><h1>{event.title}</h1></div>        
                        <div className="event_details">
                            <div className="eventlocation">{event.location}</div>
                            <div className="eventprice"> £{event.price}</div>
                        </div>
                        <div className="event_details">
                            <div className="eventstart">{new Date(event.date_start).toUTCString()}</div>
                            <div className="eventend"> {new Date(event.date_end).toUTCString()}</div>
                        </div>
                        <button onClick={() => {book_event(event.id)}} >Book your place now</button>
                    </div>
                </div>
        <div className="event-description"><h1>{event.description}</h1></div>

    </div>

    )
}

export default EventDisplay;