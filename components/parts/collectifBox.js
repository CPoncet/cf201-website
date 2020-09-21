import React from "react";

export default (props) => {
  const images = {
    accompagnement: "/le-collectif/collectif-1.svg",
    rse: "/le-collectif/collectif-2.svg",
    humain: "/le-collectif/collectif-3.svg",
    qualite: "/le-collectif/collectif-4.svg",
  };
  return (
    <div
      className={`collectif-box rounded-lg flex p-8 sm:pl-64 sm:pt-24 sm:pb-24 mb-8`}
      style={{
        background: `url('${images[props.image]}') no-repeat center/cover, ${
          props.service ? "#f8c8b3" : "#f19066"
        }`,
      }}
    >
      <div className={`w-full sm:w-3/5`}>{props.children}</div>
    </div>
  );
};
