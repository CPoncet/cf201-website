import React from "react";
import Desktop from "../svg/icons/Desktop";

export default (props) => {
  const images = {
    desktop: <Desktop />,
  };

  return (
    <div className="w-full md:w-1/3 md:p-4 mb-4 md:mb-0">
      <div className="icon-box w-2/3 mx-auto md:w-full md:mx-0 bg-white shadow rounded p-4 flex flex-col items-center justify-center">
        {props.image ? images[props.image] : null}
        {props.children}
      </div>
    </div>
  );
};
