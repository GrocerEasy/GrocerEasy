import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./ErrorBox";
import './componentStylesheets/SignupLogin.css';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayErr, setDisplayErr] = useState(false);
  const Navigate = useNavigate();
  

  async function submitInfoToAuthRouter (e) {
    e.preventDefault();
    
    const body = {
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
        // add logic for handling server error
      })
  }
  
  const errorDisplay = displayErr ? <ErrorBox value={displayErr}/> : null;

  return (
    <div className="forms">
      <h1>Sign Up</h1>
      <form id="signup-form" onSubmit={submitInfoToAuthRouter}>
        <label>Username:</label>
        <input className="username-field" type='text' name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <br/>

        <label>Email:</label>
        <input className="email-field" type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <br/>

        <label>Password:</label>
        <input className="password-field" type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br/>

        <input className="submit-button" type='submit'></input>
      </form>
      {errorDisplay}
    </div>
  )
};