import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";
import CartItem from "./CartItem";
import cartApis from "./utils/addCartToDatabase";

function CartContainer({ itemsInCart, handleDeleteItemFromCart, userStatus }) {
  const [cartTotal, setCartTotal] = useState(0.00);
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const cartResults = itemsInCart.length
    ? itemsInCart.map((item, index) => (
        <CartItem
          key={item.food_name + index}
          resultArrIndex={index}
          item={item}
          handleDeleteItemFromCart={handleDeleteItemFromCart}
        />
      ))
    : [];
  const sumCartItems = () => {
    let sum = 0.00;
    itemsInCart.forEach((item) => (sum += item.food_price));
    setCartTotal(sum.toFixed(2));
    return sum;
  };

  const handleSaveCart = () => {
    cartApis.addCartToDatabase(cartResults);

  }
  useEffect(() => {
    if(userStatus)setUserLoggedIn(true);

  }, [])
  useEffect(() => {
    sumCartItems();
  }, [itemsInCart]);
  return (
    <div className="cartContainer">
      <div className="cartContainerDisplay">
        <div className="cartHeader">Shopping Cart
        {userLoggedIn ? 
        <SubmitButton handleOnClick={handleSaveCart}>Save Cart</SubmitButton> : ''
        }
        </div>
        {/* <div className="cartResultsDisplay"> */}
        <table className="cartResultsTable">
          <tbody>
            <tr className="topRowSearchTable">
              <td style={{ width: "50%" }}>Name</td>
              <td style={{ width: "20%" }}>Price</td>
              <td style={{ width: "15%" }}>Qty</td>
              <td style={{ width: "15%" }}>Remove</td>
            </tr>
            {cartResults}
          </tbody>
        </table>
        {/* </div> */}
      </div>
      <div className="cartFooter">
        <div>Total</div>
        <div>${cartTotal}</div>
      </div>
    </div>
  );
}

export default CartContainer;
