import React from "react";
import InputBox from "./InputBox";
import ShoppingCart from "./ShoppingCart";

function InputAndCartContainer() {
  return (
    <div>
      <InputBox />
      {/* SHOPPING CART foodName = {val.food_name}*/}
      {/* removed prop totalPrice={totalPrice} from ShoppingCart component*/}
      <ShoppingCart />
    </div>
  )
};
  
export default InputAndCartContainer;