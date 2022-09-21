import React, {useState} from "react";
import { redirect } from "react-router";
import axios from "axios";


export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  // route to localhost:3000/auth/register
  async function submitInfoToAuthRouter (e) {
    e.preventDefault();
    
    let body = {
      username: username,
      email: email,
      password: password
    }

    body = JSON.stringify(body)

    console.log('JSON version of body', body);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    // const test = await axios.get('/auth/login')
    // console.log(test);

    // axios({
    //   method: 'post',
    //   url: '/auth/register',
    //   data: {
    //    username: 'evandeam',
    //   email: 'ebdeam@gmail.com',
    //   password: 'password'
    //   }
    // });
    const bodyObj = {
      username: username,
      email: email,
      password: password
    }
   await fetch(`/auth/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      });
    // axios({
    //   method: 'get',
    //   url: '/auth/login',
    //   // responseType: 'stream'
    // })
    //   .then(function (response) {
    //     console.log(response)
      
    //   });


    // const submit = await axios.post('/auth/register', {
    //   username: 'evandeam',
    //   email: 'ebdeam@gmail.com',
    //   password: 'password'
    // }, config)

    // fetch('localhost:8080/auth/register', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: body
    // })
    // .then(res => res.json())
    // // .then(res => console.log(res))
    // .catch(err => console.log(err))
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