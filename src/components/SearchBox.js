import React, { useState } from "react";
import krogerApis from "./utils/krogerApis";
import SubmitButton from "./SubmitButton";
const SearchBox = () => {
  const [searchProductsText, setSearchProductsText] = useState("");
  const [searchLocationsText, setSearchLocationsText] = useState("");

  const submitSearchProductText = () => {
    const request = "searchStoreItems";
    const payload = {
      searchStoreItems: searchProductsText,
      locationId: "70600119", //Placeholder currently need to update
    };
    console.log("search text", searchProductsText);
    const searchResults = krogerApis.searchKrogerDatabase(request, payload);
    console.log("Search Results:", searchResults);
  };
  const submitSearchStoreText = () => {
    const request = "searchStoreLocations";
    const payload = { zipCode: searchLocationsText };
    const storeLocations = krogerApis.searchKrogerDatabase(request, payload);
    console.log("Store Locations:", storeLocations);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Search Items"
        id="searchText"
        onChange={(event) => {
          setSearchProductsText(event.target.value);
        }}
      />
      <SubmitButton handleOnClick={submitSearchProductText}>
        Search
      </SubmitButton>
      <input
        type="text"
        placeholder=" Zipcode"
        id="searchText"
        onChange={(event) => {
          setSearchLocationsText(event.target.value);
        }}
      />
      <SubmitButton handleOnClick={submitSearchStoreText}>
        Search Store Locations
      </SubmitButton>
    </div>
  );
};
export default SearchBox;
