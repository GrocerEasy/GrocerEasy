import React from 'react';

function Item({ cart }) {
  return (
    <div>
      <div className='groceryCartFull'>
        {' '}
        {/* This key removes the warning in the browser console log */}
        <div className='groceryCartItem groceryName'>Eggs</div>
        <div className='groceryCartItem groceryQty'>1</div>
        <div className='groceryCartItem grocerySize'>BIG</div>
        <div className='groceryCartItem groceryPrice'>$0.69</div>
        {/* <button className="deleteButton" onClick={() => deleteGroceryItem(val._id)}> X </button> */}
        <button
          style={{ marginLeft: '10px', marginRight: '10px' }}
          // onClick={() => increaseHandler(val.food_name)}
        >
          ⬆️
        </button>
        <button
          style={{ marginRight: '10px' }}
          // onClick={() => decreaseHandler(val.food_name)}
        >
          ⬇️
        </button>
        <button
          className='deleteButton btn btn-danger'
          // onClick={() => deleteItem(val.food_name, val.food_price, val.qty)}
        >
          X
        </button>
      </div>
      <div>{cart.msg}</div>
    </div>
  );
}

// function Item() {
//   return (
//     <div>
//       <div className='groceryCartFull'>
//         {' '}
//         {/* This key removes the warning in the browser console log */}
//         <div className='groceryCartItem groceryName'>{val.food_name}</div>
//         <div className='groceryCartItem groceryQty'>{val.qty}</div>
//         <div className='groceryCartItem grocerySize'>{val.food_size}</div>
//         <div className='groceryCartItem groceryPrice'>${val.food_price}</div>
//         {/* <button className="deleteButton" onClick={() => deleteGroceryItem(val._id)}> X </button> */}
//         <button
//           style={{ marginLeft: '10px', marginRight: '10px' }}
//           onClick={() => increaseHandler(val.food_name)}
//         >
//           ⬆️
//         </button>
//         <button
//           style={{ marginRight: '10px' }}
//           onClick={() => decreaseHandler(val.food_name)}
//         >
//           ⬇️
//         </button>
//         <button
//           className='deleteButton btn btn-danger'
//           onClick={() => deleteItem(val.food_name, val.food_price, val.qty)}
//         >
//           X
//         </button>
//       </div>
//     </div>
//   );
// }

export default Item;
