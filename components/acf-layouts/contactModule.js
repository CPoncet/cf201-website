import React from "react";
import Media from "../parts/media";
import parse from "html-react-parser";

const ContactModule = ({ data }) => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-full order-last md:order-first md:w-1/2">
          <Media
            type={"image"}
            src={data.image.sourceUrl}
            altText={data.altText}
          />
        </div>
        <div className="w-full md:w-1/2 pl-4">{parse(data.content)}</div>
      </div>
    </section>
  );
};

export default ContactModule;
