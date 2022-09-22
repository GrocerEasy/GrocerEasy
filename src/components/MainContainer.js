import React, { useEffect, useState } from "react";
import SearchResultsContainer from "./SearchResultsContainer";
import CartContainer from "./CartContainer";
import krogerApis from "./utils/krogerApis";

// Redux
import { useSelector } from 'react-redux';

function MainContainer() {
  const [searchProductsText, setSearchProductsText] = useState("");
  const [searchLocationsText, setSearchLocationsText] = useState("");
  const [productSearchResults, setProductsSearchResults] = useState([]);
  const [storeLocationsResults, setStoreLocationResults] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  // 
  const userLogin = useSelector((state) => state.userLogin);
  // User info will have user, message, accesstoken
  const userInfo = userLogin.user;
  const userCart = userLogin.cart;
  console.log(userLogin)
  // if(userLogin){ 
  //   setItemsInCart([])}
  //   console.log('userINfo',userInfo)
    //userInfo.user.id
    //userInfo.user.username
  //userInfo.cart
  /** Accessing data
   * id -> userInfo.user.id
   * 
   */
  useEffect(()=>{
    if(userLogin.userInfo){
      console.log('here',userLogin.userInfo.cart)

      setItemsInCart([...userLogin.userInfo.cart]);

    }
    console.log(itemsInCart)
  },[])

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
