import React from "react";

const InputBox = () => {
  return (
    <div className="shoppingCart">
      <div className="marketContainer">
        <div className="marketLogo">Kroger Market Logo
          <img src="/img/kroger_svg_logo.svg" alt="" />
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