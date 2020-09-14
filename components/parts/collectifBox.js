import React from "react";

export default (props) => {
  const images = {
    accompagnement: "",
  };
  return (
    <div
      className={`collectif-box ${
        props.service ? "bg-secondary" : "bg-primary"
      } rounded-lg flex justify-end p-4 pt-24 pb-24`}
      style={{
        backgroundImage: `url(${images[props.image]}) no-repeat center/cover`,
      }}
    >
      <div className="w-3/4">{props.children}</div>
    </div>
  );
};
