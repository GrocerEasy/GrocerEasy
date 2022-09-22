import React from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";

function CartContainer() {
  return (
    <div className="cartContainer">
      <div className="cartHeader">Shopping Cart</div>
      <div >Contents</div>
      <div className="cartFooter"><div>Total</div><div>$1,000,000</div></div>
    </div>
  );
}

export default CartContainer;
