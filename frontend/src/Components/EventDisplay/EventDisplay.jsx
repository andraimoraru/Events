import React from 'react';
import './EventDisplay.css';
import { Link } from 'react-router-dom';

export const EventDisplay = (props) => {

  return (
      <div className='event'>
          <Link to={`/event/${props.id}`} key={props.id} id = {props.id} ><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
          <p>{props.title}</p>
          <div className="event-details">
              <div className="event-location">
                  {props.location}
              </div>
              <div className="event-price">
                  £{props.price}
              </div>
          </div>
      </div>
    )
}

export default EventDisplay;