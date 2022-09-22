import React from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";
import SearchResultsItem from "./SearchResultsItem";

function SearchResultsContainer({
  handleOnChange,
  handleOnClick,
  productSearchResults,
}) {
  console.log("productsearch", productSearchResults);
  const searchResults = productSearchResults.map((item) => (
    <SearchResultsItem item={item} />
  ));
  return (
    <div className="searchResultsContainer">
      <div className="searchBox">
        <SearchBox
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
        >
          Search Products...
        </SearchBox>
      </div>
      <div className="searchResultsDisplay">
        <table className="searchResultsTable">
          <tbody>

          <tr className="topRowSearchTable">
            <td style={{width: '50%'}}>Name</td>
            <td style={{width: '20%'}}>Size</td>
            <td style={{width: '20%'}}>Price</td>
            <td style={{width: '15%'}}>Add to Cart</td>
          </tr>
        {searchResults}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchResultsContainer;
