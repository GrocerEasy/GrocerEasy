import React from "react";
const SubmitButton = ({ handleOnClick, children }) => {
  return (
    < >
      <button style={{position: 'flexEnd'}} className="submitButton"onClick={handleOnClick}>{children}</button>
    </>
  );
};
export default SubmitButton;
