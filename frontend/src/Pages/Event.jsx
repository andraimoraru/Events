import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import EventDisplay from '../Components/EventDisplay/EventDisplay';


export const  Event = () => {

  const [all_events, setAll_Events] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allevents')
    .then((response) => response.json())
    .then((data) => setAll_Events(data));
  }, [])

  const { eventId } = useParams();
  const event = all_events.find((e)=> e.id===Number(eventId));
  return (
    <div >
      <EventDisplay event = {event} />
    </div>
  )
}

export default Event;