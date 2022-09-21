import React from "react";
const SubmitButton = ({ handleOnClick, children }) => {
  return (
    <div>
      <button onClick={handleOnClick}>{children}</button>
    </div>
  );
};
export default SubmitButton;
