import React from "react"

const Header = (props) => {
  return (
    <header className="header">
      <h3>Pink Fairy Shop Grabber</h3>
      <h5> Hello, {props.userName}</h5>
    </header>
  )
}

// Default userName to there! in case a username is not passed
Header.defaultProps = {
  userName: 'there!'
}

export default Header