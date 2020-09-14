import React from "react";
import SVG from "react-inlinesvg";
import HeroHome from "../svg/HeroHome";

export default (props) => {
  const images = {
    homepage: "/home/hero-home.svg",
    collectif: "/le-collectif/hero-collectif.svg",
    services: "/nos-services/hero-nos-services.svg",
    realisations: "/nos-realisations/hero-realisations.svg",
  };

  if (!props.noImage) {
    return (
      <section className="hero container mx-auto flex flex-wrap text-right pt-0 sm:pt-32">
        <div className="text w-full sm:w-1/2 flex items-center pr-4">
          <div className={`${props.reverseOrder ? "text-center" : ""}`}>
            {props.children}
          </div>
        </div>
        <div
          className={`w-full  sm:w-1/2 ${
            props.reverseOrder ? "order-first" : "order-first sm:order-last"
          }`}
        >
          {props.image ? <SVG src={images[props.image]} /> : null}
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero container mx-auto flex flex-wrap text-right pt-0 sm:pt-32">
        <div className="text w-full mx-0 sm:mx-auto sm:w-1/2 flex items-center justify-center">
          <div className="text-center">{props.children}</div>
        </div>
      </section>
    );
  }
};
