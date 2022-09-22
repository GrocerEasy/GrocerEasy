import React, {useState} from "react";
import { redirect } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        console.log("data", data);
        // Save userID and username in state (Redux)
        // Storing access token in sessionStorage because it only persists as long as tab is open -> slightly more secure that localStorage (which never deletes)
        sessionStorage.setItem('accessToken', `${data.accessToken}`);
        Navigate('/');
      })
      .catch((err) => {
        // assuming there was either some backend error OR the username or email is already associated with an account, this error gets returned from server
        // get err message (err.locals? err.message?) and display on frontend
        
      })
  }
  
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitInfoToAuthRouter}>
        <label>Username:</label>
        <input type='text' name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

        <label>Email:</label>
        <input type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label>Password:</label>
        <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <input type='submit'></input>
      </form>
    </div>
  )
};