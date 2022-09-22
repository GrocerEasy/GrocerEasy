import React from "react";

export default function Login() {
  
  
// onSubmit function

// /auth/login is the end point you want to POST to
// expected info on req.body object:
  // username: *actual username in form*
  // password: *acutal password in form*

  return (
    <div className="forms">
      <h1>Login Page</h1>
      <form>
          <label>Username:</label>
          <input type='text'></input>
          <br/>
          <label>Password:</label>
          <input type='text'></input>
          <label></label>
          <div>
          <input type='submit'></input>

          </div>
        </form>
      </div>
  )
};