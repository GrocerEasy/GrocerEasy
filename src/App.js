import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import Header from './components/Header';
// import InputBox from './components/InputBox'; // This component was transplanted to this page
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {

  // // Define States
  const[newItemName, setNewItemName] = useState('');
  const[itemQuantity, setItemQuantity] = useState(0);
  const [groceryList, setGroceryList] = useState([]) // State for list of foods

  // Retrieve Existing List
  // Calls this when we render our page, here we are trying to retrieve our full database
  useEffect(() => {
    Axios.get('http://localhost:3000/??????').then((response) => { // !!!CHECK WITH BACKEND GUYS TO GET THE CORRECT ROUTE!!!
      setGroceryList(response.data)
    })
  }, [groceryList]) // Changes to these variables will re-render those specific parts of the code

  // Add grocery item
  const addToList = async () => {
    // Communicate front end (reaching this route) with back end and send information
    Axios.post('http://localhost:3000/addToList', { // !!!CHECK WITH BACKEND GUYS TO ENSURE THIS IS THE CORRECT ROUTE!!!
      newItemName: newItemName.toLowerCase(), 
      itemQuantity: itemQuantity,
    });
  };

  // Delete entry
  const deleteGroceryItem = (id) => { // !!!CHECK WITH BACKEND GUYS TO GET THE CORRECT ROUTE!!!
    Axios.delete(`http://localhost:3000/??????/${id}`)
  }

  // Customer name placeholder - CHANGE when authentication works
  const userName = "John Doe"
  

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
            <label>Qty</label>
              <input
                className="qtyInputBox"
                type="number" 
                onChange={
                  (event) => {setItemQuantity(event.target.value)
                }} 
              />
            <button > Add to Cart</button>
          </div>
        </div>

        <br />
        {/* SHOPPING CART */}
        <ShoppingCart />

        {groceryList.map((val, key) => {
     return <div key={key} className="groceryCartFull"> {/* This key removes the warning in the browser console log */}

              <div className="groceryCartItem groceryName">{val.groceryName} grams</div>
              <div className="groceryCartItem groceryQty">{val.groceryQty}</div>
              <div className="groceryCartItem groceryPrice">{val.groceryPrice}</div>
              <div className="groceryCartItem groceryAvailability">{val.groceryAvailability}</div>

              <button className="deleteButton" onClick={() => deleteGroceryItem(val._id)}> X </button>
            </div>
        })}

        <br />
        <Footer />
      </>


    );
  }


export default App;