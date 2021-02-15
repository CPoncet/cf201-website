import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Media from "../parts/media";

const Hero = ({ data }) => {
  if (data.mediaType !== "aucun") {
    return (
      <section className="hero container mx-auto flex flex-wrap text-right pt-0 sm:pt-32">
        <div className="text w-full sm:w-1/2 flex items-center pr-4">
          <div className={`${data.mediaRight ? "" : "text-center"}`}>
            <h1>{data.title}</h1>

            {data.intro ? (
              <div className="mb-8">{parse(data.intro)}</div>
            ) : null}
            {data.buttons
              ? data.buttons.map((button, index) => (
                  <Link
                    key={`${button.text}-${index}`}
                    href={
                      button.internalLink
                        ? button.internalLink.slug
                        : button.externalLink
                    }
                  >
                    <a
                      className="btn-primary mb-4"
                      target={button.internalLink ? "_self" : "_blank"}
                    >
                      {button.text}
                    </a>
                  </Link>
                ))
              : null}
          </div>
        </div>
        <div
          className={`w-full sm:w-1/2 ${
            data.mediaRight ? "order-first sm:order-last" : "order-first"
          }`}
        >
          <Media
            type={data.mediaType}
            src={data.mediaType === "image" ? data.image.sourceUrl : data.video}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section
        className="hero container mx-auto flex flex-wrap pt-32 pb-32"
        style={{
          background: "url('/hero-abstract.svg') no-repeat center/contain",
        }}
      >
        <div className="text w-full mx-0 sm:mx-auto sm:w-1/2 flex items-center justify-center">
          <div className="text-center">
            <h1>{data.title}</h1>

            {data.intro ? (
              <div className="mb-8">{parse(data.intro)}</div>
            ) : null}
            {data.buttons
              ? data.buttons.map((button, index) => (
                  <Link
                    className="btn-primary mb-4"
                    key={`${button.text}-${index}`}
                    href={
                      button.internalLink
                        ? button.internalLink.slug
                        : button.externalLink
                    }
                    target={button.internalLink ? "_self" : "_blank"}
                  >
                    {button.text}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
