import React from "react";
import AddToCart from '../img/add-to-cart.svg'

function SearchResultsItem({item, resultArrIndex, handleAddItemToCart}) {
  return (
    < >
    <tr className="searchResultItemRow">
      <td className="leftTableCell">{item.food_name}</td>
      <td>{item.food_size}</td>
      <td>{item.food_price}</td>
      <td><img className="addToCartIcon" src={AddToCart} onClick={() => handleAddItemToCart(resultArrIndex)}></img></td>
    </tr>
    </>
  );
}

export default SearchResultsItem;
