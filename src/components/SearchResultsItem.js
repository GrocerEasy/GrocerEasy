import React from "react";

function SearchResultsItem({item}) {
  return (
    < >
    <tr>
      <td className="leftTableCell">{item.food_name}</td>
      <td>{item.food_size}</td>
      <td>{item.food_price}</td>
      <td>+</td>
    </tr>
    </>
  );
}

export default SearchResultsItem;
