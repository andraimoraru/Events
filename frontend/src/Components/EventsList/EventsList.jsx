import React, { useState, useEffect } from 'react';
import './EventsList.css';
import EventBox from '../EventBox/EventBox';
import { fetchEvents } from '../../API/api';

export const EventsList = () => {

  const [allEvents, setAllEvents] = useState([]);


  useEffect(() => {
    fetchEvents().then((events) => {setAllEvents(events)})
  }, []);


  return (
    <div className='all-events'>
        <h1>All events</h1>
        <hr />
        <div className="events">
            {allEvents.map((item)=> {
                return <EventBox key= {item.id} id={item.id} title={item.title} image={item.image} location={item.location} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default EventsList;