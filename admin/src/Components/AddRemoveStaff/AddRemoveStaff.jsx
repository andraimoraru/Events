import React from 'react';
import './AddRemoveStaff.css';

export const AddRemoveStaff = () => {


  
  return (
    <div className='add-staff'>
        <h1> Add/Remove Staff</h1>
        <div className="edit-staff-info">
          <h2>Email: </h2>
          <input type="text" className="input" /> 
          <button onClick={() => {alert("Adding staff")}}>Add / Remove Staff</button>
        </div>


    </div>
  )
}
export default AddRemoveStaff;