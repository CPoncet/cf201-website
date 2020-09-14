import React from "react";

export default (props) => {
  const images = {
    accompagnement: "/le-collectif/collectif-1.svg",
  };
  return (
    <div
      className={`collectif-box rounded-lg flex justify-end p-4 pt-24 pb-24`}
      style={{
        background: `url('${images[props.image]}') no-repeat center/cover, ${
          props.service ? "#f8c8b3" : "#f19066"
        }`,
      }}
    >
      <div className="w-3/4">{props.children}</div>
    </div>
  );
};
