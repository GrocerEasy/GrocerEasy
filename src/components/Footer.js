import React from "react"

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        Powered by:
        <li>SQL</li>
        <li>Express</li>
        <li>React</li>
        <li>Kroger API</li>
      </div>
      <div>About Us</div>
      <div>
        In Partnership with:
        <li>CodeSmith</li>
        <li>CTRI 10</li>
      </div>
    </footer>
  )
}

// Default userName to there! in case a username is not passed
Footer.defaultProps = {
  userName: 'there!'
}

export default Footer