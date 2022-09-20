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
      <div>
        The Team:
        <li>Ian Hnizdo</li>
        <li>Santiago Gil</li>
        <li>Emin Tahirov</li>
        <li>Linden Young</li>
        <li>Mauricio Castro</li>
        </div>
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