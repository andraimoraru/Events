import React from 'react';
import "./NavBar.css";
import logo from "../Assets/logo.jpg"
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-login">
          <div>
            <Link to="/"><button>Home</button></Link>
          </div>
          <div>
          {localStorage.getItem('auth-token')
            ? <>
              <Link to="/account"><button>Account</button></Link>
              <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
              </> 
            : <Link to="/login"><button>Log In</button></Link>}      
          </div>
        </div>
    </div>
  )
}

export default Navbar


