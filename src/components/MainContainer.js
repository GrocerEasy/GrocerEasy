import React from "react";
import Header from "./Header";
import InputAndCartContainer from "./InputAndCartContainer";
import Footer from "./Footer";
import SubmitButton from "./SubmitButton";
import SearchBox from "./SearchBox";

function MainContainer() {
  return (
    <div>
      <Header />
      <SearchBox />
      {/* <InputAndCartContainer /> */}
      <Footer />
    </div>
  );
}

export default MainContainer;
