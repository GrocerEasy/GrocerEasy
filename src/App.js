import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
import MainContainer from './components/MainContainer';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';

//! Following React Router tutorial, moving Login/Signup functionality into Header component

function App() {
  return (
    <div className='root'>
    <Provider store={store}>
      <Header/>
      <MainContainer />
      {/* <nav>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
      <Outlet /> */}
    </Provider>
    </div>
  );
}

export default App;
