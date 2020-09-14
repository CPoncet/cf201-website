import React from "react";

export default (props) => {
  const images = {
    accompagnement: "/le-collectif/collectif-1.svg",
  };
  return (
    <div
      className={`collectif-box rounded-lg flex justify-end p-8 sm:pt-24 sm:pb-24`}
      style={{
        background: `url('${images[props.image]}') no-repeat center/cover, ${
          props.service ? "#f8c8b3" : "#f19066"
        }`,
      }}
    >
      <div className="w-full sm:w-3/4">{props.children}</div>
    </div>
  );
};
