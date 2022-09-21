import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>GrocerEasy</h1>
    </header>
  )
};

// Default userName to there! in case a username is not passed
Header.defaultProps = {
  userName: 'value to key = username in Header component'
}

export default Header;