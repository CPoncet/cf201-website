import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <ClipLoader />
    </div>
  );
};

export default Loader;
