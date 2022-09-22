import React from "react";
import { Outlet, Link } from 'react-router-dom';
import './componentStylesheets/Header.css'
import Logo from '../img/logo-color.png'


const Header = (props) => {
  return (
    <header className="header">
      <div className='location'>Your Location: </div>
      <div className='logoContainer'>
        <img src={Logo}/>
      </div>
      <nav className='links'>
        <Link className="header-login-signup-button" to='/login'>Log In</Link>
        <Link className="header-login-signup-button" to='/signup'>Sign Up</Link>
      </nav>
      <Outlet />
    </header>
  )
};

// Default userName to there! in case a username is not passed
Header.defaultProps = {
  userName: 'value to key = username in Header component'
}

export default Header;