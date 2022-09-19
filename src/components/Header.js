import React from "react"

const Header = (props) => {
  return (
    <header className="header">
      <h1>Company Name</h1>
      <div>Company Logo</div>
      <h5> Hello, {props.userName}</h5>
    </header>
  )
}

// Default userName to there! in case a username is not passed
Header.defaultProps = {
  userName: 'there!'
}

export default Header