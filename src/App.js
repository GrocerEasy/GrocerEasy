import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Header from './components/Header';

//! Following React Router tutorial, moving Login/Signup functionality into Header component

function App() {
  return (
    <div className='root'>
      <Header />
      <MainContainer />
      {/* <nav>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
      <Outlet /> */}
    </div>
  );
}

export default App;
