import React, {useState, useEffect} from "react";


const InputBox = () => {


  return (
    <div>

      <div className="inputBox">
        <label>Item Name </label>
          <input
            className="itemInputBox"
            // Add onChange event here
            
          />
        <label>Qty</label>
          <input
            className="qtyInputBox"
            // Add onChange event here
            
          />
        <button > Add to Cart</button>
      </div>

      
    </div>
  )
}


export default InputBox