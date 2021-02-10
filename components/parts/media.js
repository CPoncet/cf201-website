import React from "react";
import { ReactSVG } from "react-svg";
import ReactPlayer from "react-player";

const Media = ({ type, src }) => {
  if (type === "image") {
    let extension = src.slice(-3);

    if (extension === "svg") {
      return (
        <ReactSVG
          className="svg-wrapper"
          src={src}
          fallback={() => <img src={src} />}
        />
      );
    }

    return <img src={src} />;
  }

  return <ReactPlayer url={src} />;
};

export default Media;
