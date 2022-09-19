import React from "react";

// import krogerLogo from './img/kroger_svg_logo.svg';

const InputBox = () => {
  return (
    <div className="shoppingCart">
      <div className="marketContainer">
        <div className="marketLogo">Kroger Market Logo
          {/* <KrogerLogo /> */}
        </div>
        <div className="marketTitles">
          <div className="individualTitle">Food</div>
          <div className="individualTitle">Qty</div>
          <div className="individualTitle">Estimated Price</div>
          <div className="individualTitle">Availability</div>
          <div className="individualTitle">Rating</div>
        </div>
      {/* The renders of what we will load onto the page will likely go here */}
      </div>
    </div>
  )
}


export default InputBox