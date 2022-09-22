import React from "react";
import SubmitButton from "./SubmitButton";
const SearchBox = ({ handleOnChange, handleOnClick, children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input type="text" placeholder={children} onChange={handleOnChange}/>
      <SubmitButton handleOnClick={handleOnClick}>Search</SubmitButton>
    </div>
  );
};
export default SearchBox;
