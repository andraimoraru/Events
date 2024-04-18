import React, {useEffect, useState} from 'react';
import './ListEvents.css';
import cross_icon from '../../assets/cross_icon.png';
import { fetchEvents, removeEvent } from '../../API/api';

export const ListEvents = () => {

  const  [isLoading, setIsLoading] = useState(true);
  const [allEvents, setAllEvents] = useState([]);

  const fetchInfo = async () => {
    fetchEvents().then((data) => {setAllEvents(data)});
  }

  useEffect(() => {
    setIsLoading(true);
    fetchInfo();   
    setIsLoading(false);
  }, []);

  const remove_event = async (id) => {
    const result = await removeEvent(id);
    if (result == "") {
      await fetchInfo();
    }   
  }
  if (isLoading) return <p> Loading ... </p>;

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
        {allEvents.map((event) => {
          return <>
                  <div key={event.id} className="listevents-format-main listevents-format">
                    <img  src={event.image} className="listevents-events-icon" alt="" />
                    <p>{event.title}</p>
                    <p>£{event.price}</p>
                    <p>{event.description}</p>
                    <p>{event.location}</p>
                    <img onClick={()=> {remove_event(event.id)}}className="listevents-remove-icon" src={cross_icon} alt="" />
                  </div>
                  <hr />
                 </>
        })}
      </div>
    </div>
  )
}


export default ListEvents