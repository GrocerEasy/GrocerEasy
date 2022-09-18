import React from "react";

const InputBox = () => {
  return (
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
        <button> Add to Cart</button>
      </div>
  )
}


export default InputBox