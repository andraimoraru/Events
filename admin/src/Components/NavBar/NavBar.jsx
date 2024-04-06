import React from 'react';
import './NavBar.css';
import navLogo from "../../assets/nav-logo.jpg";
import navProfile from "../../assets/nav-profile.svg";

export const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} alt="" className="nav-logo"/>
        <img src={navProfile} alt="" className="nav-profile"/>
    </div>
  )
}

export default NavBar;