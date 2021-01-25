import React from "react";
import parse from "html-react-parser";

const Title = ({ data }) => {
  const titleType = (type, data) => {
    switch (type) {
      case "H1":
        return <h1>{data}</h1>;
      case "H2":
        return <h2>{data}</h2>;
      case "H3":
        return <h3>{data}</h3>;
      case "H4":
        return <h4>{data}</h4>;
      case "H5":
        return <h5>{data}</h5>;
      case "H6":
        return <h6>{data}</h6>;
      default:
        return null;
    }
  };

  return (
    <section className="container mx-auto pb-0 text-center">
      {titleType(data.titleType, data.sectionTitle)}
      {data.sectionIntro ? parse(data.sectionIntro) : null}
    </section>
  );
};

export default Title;
