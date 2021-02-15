import React from "react";
import { ReactSVG } from "react-svg";
import ReactPlayer from "react-player";

const Media = ({ type, src }) => {
  if (type === "image") {
    return <img src={src} />;
  }

  return <ReactPlayer url={src} />;
};

export default Media;
