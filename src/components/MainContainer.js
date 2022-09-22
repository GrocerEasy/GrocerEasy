import React, { useState } from "react";
import SearchResultsContainer from "./SearchResultsContainer";
import CartContainer from "./CartContainer";
import krogerApis from "./utils/krogerApis";

function MainContainer() {
  const [searchProductsText, setSearchProductsText] = useState("");
  const [searchLocationsText, setSearchLocationsText] = useState("");
  const [productSearchResults, setProductsSearchResults] = useState([]);
  const [storeLocationsResults, setStoreLocationResults] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  const submitSearchProductText = async () => {
    const request = "searchStoreItems";
    const payload = {
      searchStoreItems: searchProductsText,
      locationId: "70600119", //Placeholder currently need to update
    };
    setProductsSearchResults(
      await krogerApis.searchKrogerDatabase(request, payload)
    );
    // console.log("Search Results:", productSearchResults);
  };
  const submitSearchStoreText = async () => {
    const request = "searchStoreLocations";
    const payload = { zipCode: searchLocationsText };
    setStoreLocationResults(
      await krogerApis.searchKrogerDatabase(request, payload)
    );
    console.log("Store Locations:", storeLocationsResults);
  };

  const handleAddItemToCart = (productSearchResultsIndex) => {
    setItemsInCart([
      ...itemsInCart,
      productSearchResults[productSearchResultsIndex],
    ]);
    console.log("cart", itemsInCart);
  };
  const handleDeleteItemFromCart = (cartItemIndex) => {
    console.log('index',cartItemIndex, 'items', itemsInCart)
    const newArray = itemsInCart.filter((item, index) => index !== cartItemIndex)
    console.log('new', newArray)
    setItemsInCart(newArray);
    console.log("cart", itemsInCart);
  };
  const handleOnChangeSearchProduct = (e) =>
    setSearchProductsText(e.target.value);
  const handleOnChangeSearchLocation = (e) =>
    setSearchLocationsText(e.target.value);
  return (
    <div className="mainContainer">
      {/* <SearchBox handleOnChange={setSearchProductsText} handleOnClick={submitSearchProductText}>Search Products</SearchBox> */}
      <SearchResultsContainer
        handleOnChange={handleOnChangeSearchProduct}
        handleOnClick={submitSearchProductText}
        productSearchResults={productSearchResults}
        handleAddItemToCart={handleAddItemToCart}
      />
      <CartContainer
        itemsInCart={itemsInCart}
        handleDeleteItemFromCart={handleDeleteItemFromCart}
      />
      {/* <InputAndCartContainer /> */}
    </div>
  );
}

export default MainContainer;
