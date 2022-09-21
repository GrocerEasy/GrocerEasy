import React from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";

function SearchResultsContainer({ handleOnChange, handleOnClick, productSearchResults }) {
  console.log('productsearch', typeof productSearchResults)
  // const searchResults = productSearchResults.map(>)
  return (
    <div className="searchResultsContainer" style={{ backgroundColor: "blue" }}>
      <div className="searchBox">
        <SearchBox
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
        >
          Search Products
        </SearchBox>
      </div>
      <div className="searchResultsDisplay">
        {/* {searchResults} */}

        
      </div>
    </div>
  );
}

export default SearchResultsContainer;
