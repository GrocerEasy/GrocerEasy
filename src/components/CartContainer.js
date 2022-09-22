import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";
import CartItem from "./CartItem";

function CartContainer({itemsInCart, handleDeleteItemFromCart}) {
  const [cartTotal, setCartTotal] = useState(0.00);
  const cartResults = (itemsInCart.length ? (itemsInCart.map((item, index) => (
    <CartItem key={item.food_name} resultArrIndex={index} item={item} handleDeleteItemFromCart={handleDeleteItemFromCart} />
  ))) : []);
const sumCartItems = () => {
  let sum = 0.00;
  itemsInCart.forEach(item => sum+= item.food_price )
  setCartTotal(sum);
  return sum;

}
  useEffect(() => {
    sumCartItems();
  }, [itemsInCart])
  return (
    <div className="cartContainer">
    <div className="cartContainerDisplay">
      <div className="cartHeader">Shopping Cart
</div>
      {/* <div className="cartResultsDisplay"> */}
        <table className="cartResultsTable">
          <tbody>

          <tr className="topRowSearchTable">
            <td style={{width: '50%'}}>Name</td>
            <td style={{width: '20%'}}>Price</td>
            <td style={{width: '15%'}}>Qty</td>
            <td style={{width: '15%'}}>Remove</td>
          </tr>
          {cartResults}
          </tbody>
        </table>
      {/* </div> */}
      </div>
      <div className="cartFooter"><div>Total</div><div>${cartTotal}</div></div>
    </div>
  );
}

export default CartContainer;
