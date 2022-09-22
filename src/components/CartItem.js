import React from "react";
import TrashCan from '../img/trash-can.svg'

function CartItem({item, resultArrIndex, handleDeleteItemFromCart}) {
  return (
    < >
    <tr className="searchResultItemRow">
      <td className="leftTableCell">{item.food_name}</td>
      <td>{item.food_price}</td>
      <td>1</td>
      <td><div className="iconContainer"><img className="addToCartIcon" src={TrashCan} onClick={() => handleDeleteItemFromCart(resultArrIndex)}></img> </div></td>
    </tr>
    </>
  );
}

export default CartItem;
