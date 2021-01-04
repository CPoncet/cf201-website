import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const Hero = ({ data }) => {
  if (data.media_type !== "aucun") {
    return (
      <section className="hero container mx-auto flex flex-wrap text-right pt-0 sm:pt-32">
        <div className="text w-full sm:w-1/2 flex items-center pr-4">
          <div className={`${data.media_right ? "" : "text-center"}`}>
            <h1>{data.title}</h1>

            {data.intro ? (
              <div className="mb-8">{parse(data.intro)}</div>
            ) : null}
            {data.buttons
              ? data.buttons.map((button, index) => (
                  <Link
                    key={`${button.text}-${index}`}
                    href={
                      button.internal_link
                        ? button.internal_link.post_name
                        : button.external_link
                    }
                  >
                    <button className="mb-4">
                      <a target={button.internal_link ? "_self" : "_blank"}>
                        {button.text}
                      </a>
                    </button>
                  </Link>
                ))
              : null}
          </div>
        </div>
        <div
          className={`w-full sm:w-1/2 ${
            data.media_right ? "order-last" : "order-last sm:order-first"
          }`}
        >
          {data.media_type === "image" ? (
            <img src={data.image} />
          ) : (
            parse(data.video)
          )}
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
                    key={`${button.text}-${index}`}
                    href={
                      button.internal_link
                        ? button.internal_link
                        : button.external_link
                    }
                  >
                    <button className="mb-4">
                      <a target={button.internal_link ? "_self" : "_blank"}>
                        {button.text}
                      </a>
                    </button>
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
