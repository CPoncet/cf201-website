import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const MediaText = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.media_text
        ? data.media_text.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex flex-col md:flex-row mt-8"
            >
              <div
                className={`w-full md:w-${
                  item.image_col_size
                } image flex justify-center ${
                  item.media_right ? "order-last" : "mr-8 sm:order-first"
                }`}
              >
                {item.media_type === "image" ? (
                  <img
                    className={`w-full ${
                      item.image_col_size === "1/4" ? "md:w-1/4" : "md:w-1/2"
                    }`}
                    src={item.image}
                  />
                ) : (
                  parse(item.video)
                )}
              </div>
              <div
                className={`w-full ${
                  item.image_col_size === "1/4" ? "md:w-3/4" : "md:w-1/2"
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
                              button.internal_link
                                ? button.internal_link.post_name
                                : button.external_link
                            }
                          >
                            <button className="mb-4">
                              <a
                                target={
                                  button.internal_link ? "_self" : "_blank"
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
