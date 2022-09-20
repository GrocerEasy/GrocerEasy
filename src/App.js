import React, {useState, useEffect} from 'react';
import Axios from 'axios';
// import krogerLogo from './img/kroger_svg_logo.svg';
// import logo from './img/'

import Header from './components/Header';
// import InputBox from './components/InputBox'; // This component was transplanted to this page
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {

  // // Define States
  const[newItemName, setNewItemName] = useState('');
  const[itemQuantity, setItemQuantity] = useState(0);
  const [groceryList, setGroceryList] = useState([]) // State for list of foods
  const [totalPrice, setTotalPrice] = useState(0);

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

  // Add grocery item
  const addToList = () => {
    // Communicate front end (reaching this route) with back end and send information
    // try {
    Axios.get(`http://localhost:3000/addToList/${newItemName.toLowerCase()}`)
    .then(response => {
      console.log(response.data)
      response.data.qty = itemQuantity;
      response.data.food_name = newItemName;
      setTotalPrice((Number(totalPrice) + Number(response.data.food_price * response.data.qty)).toFixed(2))
      // updating state to include the new food item data
      setGroceryList([...groceryList, response.data]);
    })
   .catch(err => {  
    console.log(err)
   }) 
  };

  // Delete entry
  // const deleteGroceryItem = (id) => { // !!!CHECK WITH BACKEND GUYS TO GET THE CORRECT ROUTE!!!
  //   Axios.delete(`http://localhost:3000/??????/${id}`)
  // }

  // Customer name placeholder - CHANGE when authentication works
  const userName = "Will Paragraph";
  

    return (
      <>
        <Header userName={userName}/>
        <br />

        {/* GROCERY ITEM INPUT BOX */}
        <div>
          <div className="inputBox">
            <label>Item Name </label>
              <input
                className="itemInputBox"
                type="text" 
                onChange={
                  (event) => {setNewItemName(event.target.value);
                }}
              />
            <label style={{marginLeft: '10px'}}>Qty</label>
              <input
                className="qtyInputBox"
                type="number" 
                onChange={
                  (event) => {setItemQuantity(event.target.value)
                }} 
              />
            <button style={{marginLeft: '10px'}} className='addButton' onClick={addToList}> + Add</button>
          </div>
        </div>

        <br />
        {/* SHOPPING CART foodName = {val.food_name}*/}
        <ShoppingCart totalPrice={totalPrice}/>

        <div className="shoppingListDisplay">
          {groceryList.map((val, key) => {
            return (
              <div key={key} className="groceryCartFull"> {/* This key removes the warning in the browser console log */}
                <div className="groceryCartItem groceryName">{val.food_name}</div>
                <div className="groceryCartItem groceryQty">{val.qty}</div>
                <div className="groceryCartItem grocerySize">{val.food_size}</div>
                <div className="groceryCartItem groceryPrice">${val.food_price}</div>
                {/* <button className="deleteButton" onClick={() => deleteGroceryItem(val._id)}> X </button> */}
                <button style={{marginLeft: '10px', marginRight: '10px'}}onClick={()=>increaseHandler(val.food_name)}>⬆️</button>
                <button style={{marginRight: '10px'}}onClick={()=>decreaseHandler(val.food_name)}>⬇️</button>
                <button className='deleteButton btn btn-danger' onClick={() => deleteItem(val.food_name, val.food_price, val.qty)}>X</button>
            </div>)
          })}
        </div>
          
        <br />
        <Footer />
      </>


    );
  }


export default App;