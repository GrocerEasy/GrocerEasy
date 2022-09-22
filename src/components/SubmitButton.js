import React from "react";
const SubmitButton = ({ handleOnClick, children }) => {
  return (
    < >
      <button style={{width: '100px'}} className="submitButton"onClick={handleOnClick}>{children}</button>
    </>
  );
};
export default SubmitButton;
