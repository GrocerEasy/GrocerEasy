import React, {useState} from "react";
import { redirect } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./ErrorBox";


export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayErr, setDisplayErr] = useState(false);
  const Navigate = useNavigate();
  

  async function submitInfoToAuthRouter (e) {
    e.preventDefault();
    
    let body = {
      username: username,
      email: email,
      password: password
    }

   await fetch('/auth/register', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.err) {
          const errMsg = data.err;
          setDisplayErr(errMsg);
          return;
        }

        console.log("data", data);
        // Save userID (data.userID) and username (data.username) in state (Redux)
        sessionStorage.setItem('accessToken', `${data.accessToken}`);
        Navigate('/');
      })
      .catch((err) => {
        // assuming there was either some backend error OR the username or email is already associated with an account, this error gets returned from server
        // get err message (err.locals? err.message?) and display on frontend
        
      })
  }
  
  const errorDisplay = displayErr ? <ErrorBox value={displayErr}/> : null;

  return (
    <div className="forms">
      <h1>Sign Up</h1>
      <form onSubmit={submitInfoToAuthRouter}>
        <label>Username:</label>
        <input type='text' name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

        <br/>
        <label>Email:</label>
        <input type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <br/>
        <label>Password:</label>
        <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br/>
        <input type='submit'></input>
      </form>
      {errorDisplay}
    </div>
  )
};