import React, { useState } from "react";
import SearchResultsContainer from "./SearchResultsContainer";
import CartContainer from "./CartContainer";
import krogerApis from "./utils/krogerApis";

function MainContainer() {
  const [searchProductsText, setSearchProductsText] = useState("");
  const [searchLocationsText, setSearchLocationsText] = useState("");
  const [productSearchResults, setProductsSearchResults] = useState([]);
  const [storeLocationsResults, setStoreLocationResults] = useState([]);

  const submitSearchProductText = async () => {
    const request = "searchStoreItems";
    const payload = {
      searchStoreItems: searchProductsText,
      locationId: "70600119", //Placeholder currently need to update
    };
    console.log("search text", searchProductsText);
    setProductsSearchResults(await krogerApis.searchKrogerDatabase(request, payload));
    console.log("Search Results:", productSearchResults);
  };
  const submitSearchStoreText = async () => {
    const request = "searchStoreLocations";
    const payload = { zipCode: searchLocationsText };
    setStoreLocationResults(await krogerApis.searchKrogerDatabase(request, payload));
    console.log("Store Locations:", storeLocationsResults);
  };
  const handleOnChangeSearchProduct = (e) =>
    setSearchProductsText(e.target.value);
  const handleOnChangeSearchLocation = (e) =>
    setSearchLocationsText(e.target.value);
console.log('STATE', productSearchResults)
  return (
    <div className="mainContainer">
      {/* <SearchBox handleOnChange={setSearchProductsText} handleOnClick={submitSearchProductText}>Search Products</SearchBox> */}
      <SearchResultsContainer
        handleOnChange={handleOnChangeSearchProduct}
        handleOnClick={submitSearchProductText}
        productSearchResults={productSearchResults}
      />
      <CartContainer />
      {/* <InputAndCartContainer /> */}
    </div>
  );
}

export default MainContainer;
