import React from "react";
// //import { ReactComponent as Logo } from '../img/kroger_svg_logo.svg';
//<div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
//import image from '../img/kroger_svg_logo.svg';

const image = 'https://www.kroger.com/content/v2/binary/image/kroger_svg_logo--freshcart_kroger_color_logo--kroger.svg';

const ShoppingCart = (props) => {
  return (
    <div className="shoppingCart">
      <div className="marketContainer">
        <div className="logoDiv">
          <img
           className = "krogerLogo"
           src="https://www.kroger.com/content/v2/binary/image/kroger_svg_logo--freshcart_kroger_color_logo--kroger.svg"
           alt="krogerLogo"
          />
        </div>
        <div className="marketTitles">
          <div className="individualTitle groceryName">Food</div>
          <div className="individualTitle groceryQty">Qty</div>
          <div className="individualTitle grocerySize">Size</div>
          <div style={{marginRight: '25px'}} className="individualTitle groceryPrice">Price</div>
          <div id="total-price-display">Total Price: $ {props.totalPrice}</div>
        </div>
      {/* The renders of what we will load onto the page will likely go here */}
      </div>
    </div>
  )
}


export default ShoppingCart;