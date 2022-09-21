import React, { useEffect } from 'react';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/itemsAction';

function ShoppingCart() {
  // This is the hook redux store method
  const dispatch = useDispatch();

  // Pulling from the state -> Look at the ./reducers/index.js file for the state name
  const cartList = useSelector((state) => state.cartList);
  const { loading, error, cart } = cartList;
  console.log('cart', cart);

  // Making the request to the backend for products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const arrayOfItems = groceryList.map((val, key) => {
  //   // We basically want to populate an array of Item components
  //   <Item />;
  // });

  // const deleteItem = (name, price, qty) => {
  //   const newGroceryList = groceryList.filter(
  //     (item) => item.food_name !== name
  //   );
  //   setGroceryList(newGroceryList);
  //   setTotalPrice((Number(totalPrice) - Number(price) * qty).toFixed(2));
  // };

  // decrease edit
  // const decreaseHandler = (name) => {
  //   setGroceryList(
  //     groceryList.map((item) => {
  //       if (item.food_name === name) {
  //         if (item.qty > 1) {
  //           item.qty--;
  //           setTotalPrice(
  //             (Number(totalPrice) - Number(item.food_price)).toFixed(2)
  //           );
  //         }
  //       }
  //       return item;
  //     })
  //   );
  // };

  // increase edit
  // const increaseHandler = (name) => {
  //   setGroceryList(
  //     groceryList.map((item) => {
  //       if (item.food_name === name) {
  //         item.qty++;
  //       }
  //       setTotalPrice(
  //         (Number(totalPrice) + Number(item.food_price)).toFixed(2)
  //       );
  //       return item;
  //     })
  //   );
  // };

  // We basically want to hardcode the structure of a shopping list with the ability
  // to lengthen it indefinitely as we push <Item /> components to groceryList useState hook
  return (
    <div className='shoppingCart'>
      <div className='marketContainer'>
        <div className='logoDiv'></div>
        <div className='marketTitles'>
          <div className='individualTitle groceryName'>Food</div>
          <div className='individualTitle groceryQty'>Qty</div>
          <div className='individualTitle grocerySize'>Size</div>
          <div
            style={{ marginRight: '25px' }}
            className='individualTitle groceryPrice'
          >
            Price
          </div>
          {/* <div id="total-price-display">Total Price: $ {props.totalPrice}</div> */}
          <div id='total-price-display'>Total Price: $ 0</div>
        </div>
        {/* The renders of what we will load onto the page will likely go here */}
        {/* {arrayOfItems} */}
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Item cart={cart} />
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
