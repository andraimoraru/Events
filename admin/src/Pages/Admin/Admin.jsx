import React from 'react';
import './Admin.css';
import SideBar from '../../Components/SideBar/SideBar.jsx';
import { Routes, Route } from "react-router-dom";
import ListEvents from '../../Components/ListEvents/ListEvents.jsx';
import AddEvent from '../../Components/AddEvent/AddEvent.jsx';
import AddRemoveStaff from '../../Components/AddRemoveStaff/AddRemoveStaff.jsx';


export const Admin = () => {
  return (
    <div className='admin'>
        <SideBar/>
        <Routes>
          <Route path='/addevent' element={<AddEvent/>}/>
          <Route path='/events' element={<ListEvents/>}/>
          <Route path='/addstaff' element={<AddRemoveStaff/>}/>
        </Routes>
    </div>
  )
}
