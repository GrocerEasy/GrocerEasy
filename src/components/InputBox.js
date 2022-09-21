import React, { useState, useEffect } from 'react';

// Redux state for itemQuantity
// import {
//   increaseValue,
//   decreaseValue,
//   setItemQuantity
// } from '../redux/actions/itemsAction';
import { useSelector, useDispatch } from 'react-redux';

const InputBox = () => {
  // const myState = useSelector((state) => state.itemsCount.itemQuantity);
  // console.log('+++++++ STATE ++++++++', myState);
  // const dispatch = useDispatch();

  const [newItemName, setNewItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);

  const addToList = () => {
    // Communicate front end (reaching this route) with back end and send information
    Axios.get(`http://localhost:3000/addToList/${newItemName.toLowerCase()}`)
      .then((response) => {
        console.log(response.data);
        response.data.qty = itemQuantity;
        response.data.food_name = newItemName;
        setTotalPrice(
          (
            Number(totalPrice) +
            Number(response.data.food_price * response.data.qty)
          ).toFixed(2)
        );
        // updating state to include the new food item data
        setGroceryList([...groceryList, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form id='item-input-form'>
      <label htmlFor='item-name'>Item name:</label>
      <input
        type='text'
        id='item-name'
        name='item-name'
        onChange={(event) => {
          setNewItemName(event.target.value);
        }}
      ></input>

      <label htmlFor='quantity'>Quantity:</label>
      <input
        type='number'
        id='quantity'
        name='quantity'
        onChange={(event) => {
          setItemQuantity(event.target.value);
        }}
      ></input>
      {/* <input type='number' id='quantity' name='quantity' onChange={(event) => {dispatch(setItemQuantity(event.target.value))}}></input> */}

      <input type='submit' value='Add to cart' onClick={addToList} />
    </form>
  );
};

export default InputBox;
