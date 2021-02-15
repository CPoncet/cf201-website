import React from "react";
import { ReactSVG } from "react-svg";
import ReactPlayer from "react-player";

const Media = ({ type, src, altText }) => {
  if (type === "image") {
    return <img src={src} alt={altText} />;
  }

  return <ReactPlayer url={src} />;
};

export default Media;
