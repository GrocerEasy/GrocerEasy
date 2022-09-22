import React, { useEffect, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './componentStylesheets/Header.css'
import Logo from '../img/logo-color.png'
// Redux
import { useSelector } from 'react-redux';
// access whether a user is logged in by logging in, or whether they have authenticated right after registering an account

const Header = (props) => {
  const userLogin = useSelector((state) => state.userLogin)
  const userRegister = useSelector((state) => state.userRegister)

  // deconstruct store state for userLogin
  const { loading, error, userInfo } = userLogin;

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('uid');
  }

  if (userInfo) {
    return (
      <header className="header">
      <div className='location'>Your Location: </div>
      <div className='logoContainer'>
        <img src={Logo}/>
      </div>
      <nav className='authLinks'>
        <button className='header-login-signup-button' onClick={logout}>Log Out</button>
        <Link className="header-login-signup-button" to='/'>Home</Link>
        <div className="header-login-signup-button">Welcome {userInfo.user.username}</div>
      </nav>
      <Outlet />
    </header>
    )
  }
  else {
    return (
      <header className="header">
        <div className='location'>Your Location: </div>
        <div className='logoContainer'>
          <img src={Logo}/>
        </div>
        <nav className='links'>
          <Link className="header-login-signup-button" to='/login'>Log In</Link>
          <Link className="header-login-signup-button" to='/signup'>Sign Up</Link>
          <Link className="header-login-signup-button" to='/'>Home</Link>
        </nav>
        <Outlet />
      </header>
    )
  };
}

// Default userName to there! in case a username is not passed
Header.defaultProps = {
  userName: 'value to key = username in Header component'
}

export default Header;