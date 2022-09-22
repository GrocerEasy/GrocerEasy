import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorBox from './ErrorBox';
import './componentStylesheets/SignupLogin.css';
import Header from './Header';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../redux/actions/userActions';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayErr, setDisplayErr] = useState(false);
  const Navigate = useNavigate();

  /**Redux
   * Assigning useDispatch to a variable
   * Pull userRegister from store to state -> This is assigned in reducer/index.js
   * Deconstructing the loading, error, and userInfo from userRegister ->
   * submitHandler for the button
   */
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userRegister;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };
  /** UseEffect Notes
   * Dependency: userInfo -> Anytime the dependency changes useEffect will run
   * We're checking to see if the userInfo populates/exists
   */
  useEffect(() => {
    if (userInfo || userLogin.userInfo) {
      Navigate('/');
    }
  }, [userInfo]);

  // async function submitInfoToAuthRouter(e) {
  //   e.preventDefault();

  //   let body = {
  //     username: username,
  //     email: email,
  //     password: password
  //   };

  //   await fetch('/auth/register', {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.err) {
  //         const errMsg = data.err;
  //         setDisplayErr(errMsg);
  //         return;
  //       }
  //       console.log('data', data);
  //       // Save userID and username in state (Redux)
  //       // Storing access token in sessionStorage because it only persists as long as tab is open -> slightly more secure that localStorage (which never deletes)
  //       sessionStorage.setItem('accessToken', `${data.accessToken}`);
  //       Navigate('/');
  //     })
  //     .catch((err) => {
  //       // assuming there was either some backend error OR the username or email is already associated with an account, this error gets returned from server
  //       // get err message (err.locals? err.message?) and display on frontend
  //     });
  // }

  const errorDisplay = error ? <ErrorBox value={error} /> : null;

  return (
    <>
      <Header />
      <div className='forms'>
        <h1>Sign Up</h1>
        <form id='signup-form' onSubmit={submitHandler}>
          <label>Username:</label>
          <input
            className='username-field'
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />

          <label>Email:</label>
          <input
            className='email-field'
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />

          <label>Password:</label>
          <input
            className='password-field'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />

          <input className='submit-button' type='submit'></input>
        </form>
        {errorDisplay}
      </div>
    </>
  );
}
