import React from "react";
import parse from "html-react-parser";

const Text = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.text ? parse(data.text) : null}
    </section>
  );
};

export default Text;
