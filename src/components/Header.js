import React from "react";
import { Outlet, Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className="header">
      <h1>GrocerEasy</h1>
      <nav>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
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