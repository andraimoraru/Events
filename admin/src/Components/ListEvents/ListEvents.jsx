import React, {useEffect, useState} from 'react';
import './ListEvents.css';
import cross_icon from '../../assets/cross_icon.png';

export const ListEvents = () => {

  const [allEvents, setAllEvents] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:9090/events').then((res) => res.json()).then((data) => {setAllEvents(data)});
  }

  useEffect(() => {
    fetchInfo()
  }, []);

  const remove_event = async (id) => {
  }

  return (
    <div className='list-events'>
      <h1>All Events List</h1>
      <div className="listevents-format-main">
        <p>Events</p>
        <p>Title</p>
        <p>Price</p>
        <p>Description</p>
        <p>Location</p>
        <p>Remove</p>
      </div>
      <div className="listevents-allevents">
        <hr />
        {allEvents.map((event,index) => {
          return <>
                  <div key={index} className="listevents-format-main listevents-format">
                    <img src={event.image} className="listevents-events-icon" alt="" />
                    <p>{event.title}</p>
                    <p>£{event.price}</p>
                    <p>{event.description}</p>
                    <p>{event.location}</p>
                    <img onClick={()=> {remove_event(event._id)}}className="listevents-remove-icon" src={cross_icon} alt="" />
                  </div>
                  <hr />
                 </>
        })}
      </div>
    </div>
  )
}


export default ListEvents