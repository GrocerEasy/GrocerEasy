import React from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";

function CartContainer() {
  return (
    <div className="cartContainer" style={{backgroundColor:"green"}}>
           <div className="cartHeader">
        {/* <SearchBox
          // handleOnChange={handleOnChange}
          // handleOnClick={handleOnClick}
        >
          Search Products
        </SearchBox> */}
      </div>
      <div className="searchResultsDisplay">
        {/* {searchResults} */}

        
      </div>
    </div>
  );
}

export default CartContainer;
