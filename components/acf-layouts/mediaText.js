import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const MediaText = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.mediaText
        ? data.mediaText.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex flex-col md:flex-row mt-8"
            >
              <div
                className={`w-full ${
                  item.imageColSize === "1/4" ? "md:w-1/4" : "md:w-1/2"
                } image flex justify-center ${
                  item.mediaRight
                    ? "mr-8 order-first md:order-last"
                    : "order-first"
                }`}
              >
                {item.mediaType === "image" ? (
                  <img
                    className={`w-1/2 md:w-full`}
                    src={item.image.sourceUrl}
                  />
                ) : (
                  parse(item.video)
                )}
              </div>
              <div
                className={`w-full ${
                  item.imageColSize === "1/4" ? "md:w-3/4" : "md:w-1/2"
                } flex items-center`}
              >
                <div>
                  <h3>{item.title}</h3>
                  <div>{parse(item.text)}</div>

                  <div className="flex justify-center">
                    {item.buttons
                      ? item.buttons.map((button, index) => (
                          <Link
                            key={`${button.text}-${index}`}
                            href={
                              button.internalLink
                                ? button.internalLink.slug
                                : button.externalLink
                            }
                          >
                            <button className="mb-4">
                              <a
                                target={
                                  button.internalLink ? "_self" : "_blank"
                                }
                              >
                                {button.text}
                              </a>
                            </button>
                          </Link>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </section>
  );
};

export default MediaText;
