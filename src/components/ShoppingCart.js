import React, { useState, useEffect } from "react";
import Item from './Item';

// //import { ReactComponent as Logo } from '../img/kroger_svg_logo.svg';
//<div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
//import image from '../img/kroger_svg_logo.svg';

const image = 'https://www.kroger.com/content/v2/binary/image/kroger_svg_logo--freshcart_kroger_color_logo--kroger.svg';

//? Unsure what exactly this might apply to, was commented out when we got the code
// Delete entry
  // const deleteGroceryItem = (id) => { // !!!CHECK WITH BACKEND GUYS TO GET THE CORRECT ROUTE!!!
  //   Axios.delete(`http://localhost:3000/??????/${id}`)
  // }

function ShoppingCart() {
  const [groceryList, setGroceryList] = useState([]) // State for list of foods
  const [totalPrice, setTotalPrice] = useState(0);
  
  const arrayOfItems = groceryList.map((val, key) => {
    // We basically want to populate an array of Item components
    <Item />
  })

  // Retrieve Existing List
  // Calls this when we render our page, here we are trying to retrieve our full database
  useEffect(() => {
    console.log(groceryList)
  }, [groceryList]) // Changes to these variables will re-render those specific parts of the code

  const deleteItem = (name, price, qty) => {
    const newGroceryList = groceryList.filter((item) => item.food_name !== name);
    setGroceryList(newGroceryList);
    setTotalPrice((Number(totalPrice) - (Number(price) * qty)).toFixed(2));
  }

  // decrease edit 
  const decreaseHandler = (name) => {
    setGroceryList(groceryList.map((item) => {
      if (item.food_name === name) {
        if (item.qty > 1) {
          item.qty--;
          setTotalPrice((Number(totalPrice) - (Number(item.food_price))).toFixed(2));
        }
      }
      return item
    }))
  }
  
  // increase edit
  const increaseHandler = (name) => {
    setGroceryList(groceryList.map((item) => {
      if (item.food_name === name) {
        item.qty++;
      }
      setTotalPrice((Number(totalPrice) + (Number(item.food_price))).toFixed(2));
      return item
    }))
  }

  // We basically want to hardcode the structure of a shopping list with the ability
  // to lengthen it indefinitely as we push <Item /> components to groceryList useState hook
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
          {/* <div id="total-price-display">Total Price: $ {props.totalPrice}</div> */}
          <div id="total-price-display">Total Price: $ 0</div>
        </div>
      {/* The renders of what we will load onto the page will likely go here */}
      {arrayOfItems}
      </div>
    </div>
  )
};

export default ShoppingCart;